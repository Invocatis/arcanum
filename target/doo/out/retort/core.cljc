(ns retort.core
  (:require
    [retort.inject :refer [inject]]
    [retort.wire :refer [wire]]
    [retort.mold :refer [mold]]
    [retort.hiccup :as hiccup]
    [retort.selector :as selector :refer [selects?]]))

(defn context-defaults
  [{:keys [position siblings] :or {position 0 siblings []} :as context}]
  (assoc context :position position :siblings siblings))

(defn hookup
  [design func hiccup context]
  (loop [design design
         hiccup hiccup]
    (if-let [[selector values] (first design)]
      (if (selects? selector hiccup context)
        (recur (rest design) (func values hiccup))
        (recur (rest design) hiccup))
      hiccup)))

(defn brew*
  [design hiccup & [context]]
  (let [context (context-defaults context)
        hicc (hiccup/clean hiccup)
        hicc (hookup (get design :mold)
                     mold hicc context)
        hicc (hookup (get design :data)
                     inject hicc context)
        hicc (hookup (get design :transition)
                     wire hicc context)]
    (if (fn? (first hicc))
      (brew* design (apply (first hicc) (rest hicc)) context)
      hicc)))

(defn join
  [{:keys [hiccup design]} h d]
  {:hiccup (if (fn? hiccup)
             (hiccup h)
             (or hiccup h))
   :design (if (fn? design)
             (design d)
             (or design d))})

(defn brew
  [design hiccup & [context]]
  (cond
    (vector? hiccup)
    (let [hicc (brew* design hiccup context)]
      (if (map? hicc)
        (let [{:keys [design hiccup]} (join hicc hiccup design)]
          (brew design hiccup context))
        (let [children (hiccup/children hicc)]
          (into (if (> (count hicc) 2)
                  (subvec hicc 0 2)
                  hicc)
            (map-indexed
              (fn [i child]
                (brew design child {:position i
                                    :parent context
                                    :siblings children}))
              children)))))

    (seq? hiccup)
    (map #(brew design % context) hiccup)

    :else
    hiccup))

(defn design-merge
  ([d0] d0)
  ([d0 d1]
   {:mold (merge-with comp (:mold d0) (:mold d1))
    :data (merge-with merge (:data d0) (:data d1))
    :transition (merge-with (partial merge-with comp) (:transition d0) (:transition d1))})
  ([d0 d1 & more]
   (reduce design-merge (design-merge d0 d1) more)))

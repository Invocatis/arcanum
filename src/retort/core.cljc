(ns retort.core
  (:require
    [retort.hiccup :as hiccup]
    [retort.selector :as selector :refer [selects?]]
    [retort.util :refer [multifn?]]))

(defn ancestory
  [context]
  (if-let [parent (get context :parent)]
    (cons (dissoc context :parent) (ancestory parent))
    (list context)))

(def used (atom {}))

(def cached (atom {}))

(defn inject
  [data hiccup]
  (let [data (into {} (map (fn [[k v]] [k (if (fn? v) (partial v (second hiccup)) v)]) data))]
    (cond
      (map? data)
      (update hiccup 1 merge data)

      (vector? data)
      data

      (fn? data)
      (recur (data hiccup) hiccup))))

(defn context-defaults
  [hiccup {:keys [position siblings] :or {position 0 siblings [hiccup]} :as context}]
  (assoc context :position position :siblings siblings))

(defn trim-design
  [design hiccup context]
  (into {} (filter (fn [[k v]] (selects? k hiccup context)) design)))

(defn hookup
  [design hiccup]
  (reduce (fn [hiccup value] (inject value hiccup)) hiccup (vals design)))

(defn brew*
  [design hiccup & [context]]
  (let [design (trim-design design hiccup context)]
    ; (println hiccup design (get @used hiccup))
    (cond
      (= design (get @used hiccup))
      (if (empty? design)
        hiccup
        (get @cached hiccup))

      :else
      (let [hicc (hiccup/clean hiccup)
            hicc (hookup design hicc)
            [tag attrs & children] hicc]

        (swap! cached assoc hiccup hicc)
        (swap! used update hiccup merge design)
        (doseq [{:keys [siblings position] :as context} (ancestory context)]
          (swap! used update (get siblings position) merge design))

        hicc))))

(defn brew
  [design hiccup & [context]]
  (let [context (or context (context-defaults hiccup context))]
    (cond
      (vector? hiccup)
      (let [[tag & more] (hiccup/clean hiccup)
            hicc (brew* design hiccup context)]
        [(fn []
           (let [[tag] hicc
                 hicc (if (fn? tag) (apply tag (rest hicc)) hicc)
                 children (hiccup/children hicc)]
             (println children)
             (into (if (> (count hicc) 2)
                     (subvec hicc 0 2)
                     hicc)
                   (map-indexed
                    (fn [i child]
                      (brew design child {:position i
                                          :parent context
                                          :siblings children}))
                    children))))])

      (seq? hiccup)
      (map #(brew design % context) hiccup)

      :else
      hiccup)))

(defn design-merge
  ([d0] d0)
  ([d0 d1]
   {:mold (merge (:mold d0) (:mold d1))
    :data (merge-with merge (:data d0) (:data d1))
    :transition (merge-with (partial merge-with comp) (:transition d0) (:transition d1))})
  ([d0 d1 & more]
   (reduce design-merge (design-merge d0 d1) more)))

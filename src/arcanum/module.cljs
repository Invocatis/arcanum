(ns arcanum.module
  (:require
   [arcanum.util :refer [subatom]]
   [retort.core :as retort]
   [retort.hiccup :as hiccup]))

(defn distinct-by
  [f coll]
  (let [step (fn step [xs seen]
               (lazy-seq
                 ((fn [[x :as xs] seen]
                    (when-let [s (seq xs)]
                      (if (contains? seen (f x))
                        (recur (rest s) seen)
                        (cons x (step (rest s) (conj seen x))))))
                  xs seen)))]
    (step coll #{})))

(defn -call
  [module point args]
  (cond
    (fn? point)
    (apply point args)
    (map? point)
    (let [{calls :args func :fn} point
          results (map (fn [[point & args]] (-call module point args)) calls)]
      (apply func results))))

(defn get-points
  [module point]
  (when module
    (let [base (get-in module [:api point])
          exts (reduce into [] (remove nil? (map #(get-points % point) (-> module :extends))))]
      (if (nil? base)
        exts
        (into [base] exts)))))

(defn get-point
  [module point]
  (when module
    (or (get-in module [:api point])
        (some identity (map #(get-point % point) (:extends module))))))

(defn call!
  [module point & args]
  (-call module (get-point module point) args))

(defn state
  [module]
  (-> module :state :atom))


(def modules (atom {}))

(defn register!
  [module id]
  (swap! modules assoc id module))

(def instances (atom {}))

(defn instantiate!
  [name module state attributes]

  (let [instance (module state attributes)]
    (swap! instances assoc name instance)
    instance))

(defn instantiate-or-get!
  [name module state attributes]
  (locking instances
    (or (get @instances name)
        (instantiate! name module state attributes))))

(defn emit!
  [event & args]
  (doseq [module @modules]
    (when-let [listener (-> module :listen (get event))]
      (apply listener args))))

(defn mmm
  [alchemy instance class]
  (let [{:keys [module call args] :or {args [] }} alchemy]
    (if call
      (apply call! instance call args)
      instance)))

(defn mm
  [class instance [tag {:keys [alchemy] :as params} & children :as hiccup]]
  (let [{:keys [as] :or {as class}} alchemy]
    (into [tag (assoc (dissoc params :alchemy) as (mmm alchemy instance class))] children)))

(defn mold-module
  [state modules [tag attributes & children :as hiccup]]
  (let [id (keyword (hiccup/id hiccup))
        class (keyword (first (hiccup/classes hiccup)))
        state (subatom state [class id])
        module (get @modules class)
        instance (instantiate-or-get! id module state attributes)]
    {:hiccup (into [:<>] children)
     :design #(retort/design-merge % (:design instance) {:mold {[{:alchemy {:module id}}] (partial mm class instance)}})}))

(defn design
  [state]
  {:mold
   {:module (partial mold-module state modules)}})

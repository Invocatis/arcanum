(ns arcanum.module
  (:require
   [arcanum.util :refer [subatom remove-one get-first]]
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

(defn -resolve
  [class instance {:keys [module call args as]}]
  {as (if call
        (apply call! instance call args)
        instance)})

(defn mold
  [class instance id [tag {:keys [alchemy] :as attrs} & children :as hiccup]]
  (into
   [tag
    (merge
     attrs
     (if (vector? alchemy)
       (let [mod-def (get-first #(-> % :id (= id)) alchemy)
             alchemy (remove-one #(-> % :id (= id)) alchemy)]
         (merge
           (assoc attrs :alchemy alchemy)
           (-resolve class instance mod-def)))
       (merge (dissoc attrs :alchemy)
              (-resolve class instance alchemy))))]
   children))

(defn mold-module
  [state modules [tag attributes & children :as hiccup]]
  (let [id (keyword (hiccup/id hiccup))
        class (keyword (first (hiccup/classes hiccup)))
        state (subatom state [class id])
        module (get @modules class)
        instance (instantiate-or-get! id module state attributes)]
    {:hiccup (into [:<>] children)
     :design #(retort/design-merge % (:design instance) {:mold {^:|
                                                                [{:alchemy ^:? {:module id}}
                                                                 {:alchemy     {:module id}}]
                                                                (partial mold class instance id)}})}))

(defn design
  [state]
  {:mold
   {:module (partial mold-module state modules)}})


; (deftype Module [module]
;   Object
;   (toString [this]
;     (pr-str module))
;
;   IWithMeta
;   (-with-meta [coll meta] (-with-meta coll meta))
;
;   IMeta
;   (-meta [coll] (-meta coll))
;
;   ICollection
;   (-conj [coll entry]
;     (-conj coll entry))
;
;   IEmptyableCollection
;   (-empty [coll] (-empty coll))
;
;   IEquiv
;   (-equiv [coll other] (-equiv coll other))
;
;   IHash
;   (-hash [coll] (-hash coll))
;
;   ISeqable
;   (-seq [coll]
;     (-seq coll))
;
;   ICounted
;   (-count [coll] (-count coll))
;
;   ILookup
;   (-lookup [coll k]
;     (-lookup coll k nil))
;
;   (-lookup [coll k not-found]
;     (-lookup coll k not-found))
;
;   IAssociative
;   (-assoc [coll k v]
;     (-assoc coll k v))
;
;   (-contains-key? [coll k]
;     (-contains-key? coll k))
;
;   IMap
;   (-dissoc [coll k]
;     (-dissoc coll k))
;
;   IKVReduce
;   (-kv-reduce [coll f init]
;     (-kv-reduce coll f init))
;
;   IFn
;   (-invoke
;    [a]
;    (println a))
;
;   (-invoke [coll k not-found]
;     (-lookup coll k not-found))
;
;   IEditableCollection
;   (-as-transient [coll]
;     (-as-transient coll)))

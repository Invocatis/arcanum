(ns arcanum.module)

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

(def modules (atom #{}))

(defn register!
  [module]
  (swap! modules conj module))

(defn emit!
  [event & args]
  (doseq [module @modules]
    (when-let [listener (-> module :listen (get event))]
      (apply listener args))))

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

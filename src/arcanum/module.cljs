 (ns arcanummodule)

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
      (println results)
      (apply func results))))

(defn get-points
  [module point]
  (let [base (get-in module [:api point])
        exts (map #(get-in % [:api point]) (-> module :extends))]
    (vec (remove nil? (cons base exts)))))

(defn call!
  [module point & args]
  (first
    (for [point (get-points module point)]
      (-call module point args))))

(defn state
  [module]
  (-> module :state :atom))

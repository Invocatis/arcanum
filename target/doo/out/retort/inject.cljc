(ns retort.inject)


(defn- attributes-of
  [m]
  (if-let [[_ v] (find m :attributes)]
    v
    (when-not (or (contains? m :args) (contains? m :!args))
      m)))

(defn- inject-attributes
  [data [tag attributes & children :as hiccup]]
  (update hiccup 1 merge
    (if (fn? data)
      (apply data attributes children)
      data)))

(defn- inject-args
  [data [tag attributes & children :as hiccup]]
  (if-let [[_ args] (find data :args)]
    (into hiccup
      (if (fn? args)
        (apply args attributes children)
        args))
    hiccup))

(defn inject
  [data [tag attr & args :as hiccup]]
  (let [data (if (fn? data) (data attr) data)]
    (->> hiccup (inject-attributes data) (inject-args data))))

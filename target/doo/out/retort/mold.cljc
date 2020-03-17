(ns retort.mold)

(defn mold
  [mold hiccup]
  (apply mold [hiccup]))

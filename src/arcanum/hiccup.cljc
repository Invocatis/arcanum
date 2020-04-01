(ns arcanum.hiccup)

(defn attr-assoc
  [hiccup key value]
  (update hiccup 1 assoc key value))

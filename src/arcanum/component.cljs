(ns arcanum.component
  (:require
   [retort.core :as retort]))

(def components (atom {}))

(defn register!
  [component id]
  (swap! components assoc id component))

(defn design
  []
  (->> @components vals (map :design) (reduce retort/design-merge)))

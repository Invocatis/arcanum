(ns arcanum.component
  (:require
   [retort.core :as retort]))

(def components (atom {}))

(defn register!
  [component id]
  (swap! components assoc id component))

(defn design
  []
  (->> @components vals (map :design) vec))

(defn style
  []
  (->> @components vals (map :style) (map (fn [s] [:style s])) (into [:<>])))

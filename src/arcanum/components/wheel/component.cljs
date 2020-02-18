(ns arcanum.components.wheel.component
  (:require
    [retort.core :as retort]
    [arcanum.components.wheel.view :refer [view]]
    [arcanum.components.wheel.design :refer [design]]))

(defn component
  [state]
  (fn [& args] (retort/brew (design state) (into [view] args))))

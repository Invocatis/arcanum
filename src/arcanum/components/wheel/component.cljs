(ns arcanumcomponents.wheel.component
  (:require
    [retort.core :as retort]
    [arcanumcomponents.wheel.view :refer [view]]
    [arcanumcomponents.wheel.design :refer [design]]))

(defn component
  [state]
  (fn [& args] (retort/brew (design state) (into [view] args))))

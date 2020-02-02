(ns arcanummodule.snake.core
  (:require
    [retort.core :as r]
    [arcanummodule.snake.view :as view]
    [arcanummodule.snake.controller :as controller]
    [arcanummodule :as module]))

(defn module
  [state]
  {:state
    {:default {:snake []
               :apple nil}
     :atom state}
   :api})

(defn view
  [module]
  {:core (fn [& [attrs]] (r/brew (controller/design module) [view/main attrs]))})

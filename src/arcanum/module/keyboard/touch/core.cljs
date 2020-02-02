(ns arcanummodule.keyboard.touch.core
  (:require
    [retort.core :as r]
    [arcanummodule.keyboard.touch.controller :as controller]
    [arcanummodule.keyboard.touch.view :as view]
    [arcanummodule :as module]))

(defn module
  [state & [keymap]]
  {:state {:default {:listeners {}}
           :atom state}
   :api
    {:keypress
       (fn [value]
         (module/emit! :keypress value))}})

(defn view
  [module]
  {:core (fn [& [attrs]] (r/brew (controller/design module) [view/main attrs]))})

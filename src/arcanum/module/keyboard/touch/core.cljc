(ns arcanum.module.keyboard.touch.core
  (:require
    [retort.core :as r]
    [arcanum.module.keyboard.touch.controller :as controller]
    [arcanum.module.keyboard.touch.view :as view]
    [arcanum.module :as module]))

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

(ns pos.module.menu.core
  (:require
    [retort.core :as r]
    [arcanum.module.menu.view :as view]
    [arcanum.module.menu.design :as design]
    [arcanum.module :as module]))

(defn module
  [state]
  {:state
    {:default {:equation []}
     :atom state}
   :api
    {}})

(defn view
  [module]
  {:core (fn [& [attrs]] (r/brew (controller/design module) [view/main attrs]))})

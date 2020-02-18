(ns arcanum.module.notification.design
  (:require
    [arcanum.module :as module]))

(defn transition
  [module]
  {:.dismiss {:on-click #(module/call! module :dismiss (:key %))}})

(defn data
  [module]
  {:nb {:args (reverse (module/call! module :notifications))}})

(defn design
  [module]
  {:data (data module)
   :transition (transition module)})

(ns arcanum.module.keyboard.touch.controller
  (:require
    [arcanum.module :as module]))

(defn transition
  [module]
  {:.key {:on-click (fn [{:keys [value]}] (module/call! module :keypress value))}})

(defn data
  [module]
  {})

(defn design
  [module]
  {:transition (transition module)
   :data (data module)})

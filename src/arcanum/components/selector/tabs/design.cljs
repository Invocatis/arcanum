(ns arcanumcomponents.selector.tabs.design
  (:require
    [arcanummodule :as module]))

(defn transition
  [module]
  {:tab {:on-click #(module/call! module :select (:key %))}})

(defn data
  [module]
  {:tabs {:args (module/call! module :selections)}
   :.tab {:args (fn [{:keys [key]}] (name key))}})

(defn design
  [module]
  {:transition (transition module)
   :data (data module)})

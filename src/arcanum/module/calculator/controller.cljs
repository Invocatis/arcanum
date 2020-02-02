(ns arcanummodule.calculator.controller
  (:require
    [arcanummodule :as module]))

(defn data
  [module]
  {:.window {:value (module/call! module :equation)}
   :.simple {:args (fn [{:keys [value]}] [value])}})

(defn transition
  [module]
  {:.simple {:on-click #(module/call! module :add (:value %))}
   :.delete {:on-click #(module/call! module :delete)}
   :.clear {:on-click #(module/call! module :clear)}
   :.equals {:on-click #(module/call! module :equals)}})

(defn design
  [module]
  {:data (data module)
   :transition (transition module)})

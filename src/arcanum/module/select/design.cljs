(ns arcanum.module.select.design
  (:require
    [arcanum.module :as module]))

(defn button
  [module]
  {:data
   {:.selector
    {:status (fn [{:keys [value]}]
               (if (= value (module/call! module :get))
                 "selected"
                 "unselected"))}}
   :transition
   {:.selector {:on-click #(module/call! module :set (:value %))}}})

(ns arcanum.module.data.toggle.core
  (:require
    [arcanum.module :as module]
    [arcanum.module.data.value.core :as value]))


(defn module
  [state & [{:keys [toggler default] :or {default false toggler not}}]]
  (let [value (value/module state)]
    (reset! state default)
    {:state {:default default
             :atom state}
     :extends [value]
     :api {:toggle #(module/call! value :update toggler)
           :value #(module/call! value :get)}}))

(defn button
  [module]
  (fn [params text]
    [:button (assoc params
                    :on-click #(module/call! module :toggle)
                    :status (module/call! module :get))
      text]))

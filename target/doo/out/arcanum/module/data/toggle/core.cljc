(ns arcanum.module.data.toggle.core
  (:require
    [arcanum.module :as module]
    [arcanum.module.data.value.core :as value]))


(defn module
  [state & [{:keys [toggler default] :or {default false toggler not}}]]
  (let [value (value/module state)]
    (reset! state default)
    {:name :toggle
     :state {:default default
             :atom state}
     :extends [value]
     :api {:toggle #(module/call! value :update toggler)
           :value #(module/call! value :get)}
     :design {:data
              {:.toggle
               (fn [{:keys [toggle]}]
                 {:on-mouse-down #(module/call! toggle :toggle)
                  :status (str (module/call! toggle :get))})}}}))

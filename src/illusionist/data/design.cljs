(ns illusionist.data.design
  (:require
   [fritz.core :as fritz]))

(def design
  {:data
   {{:fritz/subscribe any?}
    (fn [{:keys [to as] :as attr}] (println attr) {as (fritz/subscribe to)})}
   :transition
   {{:fritz/trigger! any?}
    (fn [{{:keys [action on]} :fritz/trigger!}]
      {on #(fritz/trigger! action)})}})

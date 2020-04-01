(ns arcanum.module.data.value.select
  (:require
    [arcanum.module.data.value.core :as value]))

(defn module
  [state & [{:keys [selections type value allow-deselect]
             :or {type :single allow-deselect true}}]]
  (merge
   {:state {:default nil
            :atom state}}
   (condp = type
     :single
     {:extends [(value/module state {:value value})]
      :api {:selected? #(= @state %)
            :select #(reset! state %)
            :unselect #(when allow-deselect reset! state nil)}}
     :multi
     {:extends [(value/module state {:value (or value #{})})]
      :api {:selected? #(contains? @state %)
            :select #(swap! state conj %)
            :unselect #(when allow-deselect swap! state disj %)}})))

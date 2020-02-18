(ns arcanum.module.calculator.core
  (:require
    [retort.core :as r]
    [arcanum.module.calculator.view :as view]
    [arcanum.module.calculator.controller :as controller]
    [arcanum.module :as module]))

(defn module
  [state]
  {:state
    {:default {:equation []}
     :atom state}
   :api
    {:equals
      {:args [[:equation]]
       :fn
         (fn [eq]
           (swap! state assoc :equation (-> eq js/eval str seq vec)))}
     :clear
      (fn [] (swap! state assoc :equation []))
     :add
      (fn [value] (swap! state update :equation conj value))
     :delete
      (fn [] (swap! state update :equation #(if-not (empty? %) (pop %) %)))
     :equation
      (fn [] (apply str (get @state :equation)))}})

(defn view
  [module]
  {:core (fn [& [attrs]] (r/brew (controller/design module) [view/main attrs]))})

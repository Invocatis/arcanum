(ns arcanummodule.calculator.core
  (:require
    [retort.core :as r]
    [arcanummodule.calculator.view :as view]
    [arcanummodule.calculator.controller :as controller]
    [arcanummodule :as module]))

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

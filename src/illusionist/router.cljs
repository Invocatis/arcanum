(ns illusionist.router
    (:require-macros [secretary.core :refer [defroute]])
    (:import goog.history.Html5History)
    (:require [secretary.core :as secretary]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [reagent.core :as reagent]))

(defn hook-browser-navigation! []
  (doto (Html5History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
      (secretary/dispatch! (.-pathname (.-location js/window)))))
    (.setEnabled true)))

(defn app-routes [state]

  (defroute "/" []
    (swap! state assoc :page :home))

  (defroute "/tab" []
    (swap! state assoc :page :tab))
  
  (hook-browser-navigation!))

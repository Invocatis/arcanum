(ns arcanum.module.select.core
  (:require
   [retort.core :as retort]
   [arcanum.module :as module]
   [arcanum.util :refer [subatom]]
   [arcanum.module.data.value.core :as value]
   [arcanum.module.select.view :as view]
   [arcanum.module.select.design :as design]))

(defn module
  [state]
  (let [super (value/module (subatom state [:selected]))]
    {:state {:default {:selections {}
                       :selected nil}
             :atom state}
     :extends [(value/module (subatom state [:selected]))]
     :api {:add (fn [key]
                  (swap! state (fn [state] (-> state
                                               (assoc-in [:selections key] key)
                                               (update-in [:order] conj key)))))
           :select (fn [key] (module/call! super :set key))
           :selected (fn [] (locking state (get-in @state [:selections (get @state :selected)])))
           :selections (fn [] (get-in @state [:order]))}}))
(defn button
  [module]
  (fn [params content]
    (retort/brew (design/button module)
                 [:button.selector params content])))

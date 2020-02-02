(ns arcanummodule.select.core)

(defn module
  [state]
  {:state {:default {:selections {}
                     :selected nil}
           :atom state}
   :api {:add (fn [key element]
                (swap! state (fn [state] (-> state
                                           (assoc-in [:selections key] element)
                                           (update-in [:order] conj key)))))
         :select (fn [key] (swap! state assoc :selected key))
         :selected (fn [] (locking state (get-in @state [:selections (get @state :selected)])))
         :selections (fn [] (get-in @state [:order]))}})

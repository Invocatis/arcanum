(ns arcanum.components.wheel.design
  (:require
    [arcanum.components.wheel.util :as util :refer [acos distance pi]]))

(defn data
  [state]
  {[:slice {:num state}] {:active "true"}})

(defn transition
  [state]
  {
   :.background
    {:on-mouse-move
      (fn [{:keys [x y total radius width offset]} ev]
        (let [evx (.-pageX ev), evy (.-pageY ev)
              d (distance [x y] [evx evy])
              theta (if (> y evy)
                      (+ pi (acos (/ (- x evx) d)))
                      (acos (/ (- evx x) d)))
              theta (mod (- theta (util/degrees->radians offset)) (* 2 pi))
              chunk (int (/ theta (/ (* 2 pi) total)))]
          (if (> d (- radius width))
            (reset! state chunk)
            (reset! state nil))))}})

(defn design
  [state]
  {:data (data @state)
   :transition (transition state)})

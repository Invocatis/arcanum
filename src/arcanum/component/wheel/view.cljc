(ns arcanum.component.wheel.view
  (:require
    [goog.string :as gstring :refer [format]]
    [goog.string.format]
    [arcanum.components.wheel.util :refer [sin cos pi polar->cartesian sqrt squared]]))

(defn arc
  [x y radius width start-angle end-angle]
  (let [end-angle-og end-angle
        end-angle (if (== 360 (- end-angle start-angle)) 359 end-angle)
        arc-sweep (if (< (- end-angle start-angle) 180) 0 1)]
    (apply str
      (interpose \space
        (flatten
          (into
            ["M" (polar->cartesian radius radius radius end-angle)
             "A" radius radius 0 arc-sweep 0
                 (polar->cartesian radius radius radius start-angle)
             "L" (polar->cartesian radius radius (- radius width) start-angle)
             "A" (- radius width) (- radius width) 0 arc-sweep 1
                 (polar->cartesian radius radius (- radius width) end-angle)
             "L" (polar->cartesian radius radius radius end-angle)]))))))

(defn midpoint
  [[x0 y0] [x1 y1]]
  [(/ (+ x0 x1) 2) (/ (+ y0 y1) 2)])

(defn background
  [{:keys [total radius x y width] :as params}]
  [:div.background
    (merge params
           {:style {:height "100vh"
                    :width "100vw"
                    :position :aboslute
                    :z-index 100}})])

(defn slice
  [{:keys [total radius x y width offset active] i :num :or {active "false"}} {:keys [id icon content]}]
  (let [theta0 (+ (* 360 (/ i total)) offset)
        theta1 (+  (* 360 (/ (inc i) total)) offset)
        arc (arc x y radius width theta0 theta1)]
    [:div.slice {:num i :active active :style {:position "absolute" :x x :y y :width radius :height radius}}
      [:svg {:style {:height (* 2 radius)
                     :width (* 2 radius)
                     :z-index 0}}
        [:path {:d arc}]]
      (let [[ix iy] (polar->cartesian radius radius (- radius (/ width 2)) (/ (+ theta0 theta1) 2))]
        [:div.icon {:active active
                    :style {:z-index 2
                            :position :absolute
                            :left ix :top iy}}
         icon])
      (let [d (sqrt (/ (squared (- radius width)) 2))]
        [:div.content {:id id :num i :active active
                       :style {:position :absolute
                               :left (- (+ x radius) d) :top (- (+ y radius) d)
                               :width (* 2 d) :height (* 2 d)}}
          content])]))

(defn view
  [{:keys [radius width x y offset] :as params :or {offset 90}} & options]
  [:div {:style {:position :absolute}}
    [background (assoc params :total (count options))]
    (into
      [:div.wheel (merge (dissoc params :radius :width :x :y)
                         {:style {:pointer-events "none"
                                  :height (* 2 radius)
                                  :width (* 2 radius)
                                  :position :absolute
                                  :top y :left x
                                  :transform "translate(-50%, -50%)"
                                  :offset (- offset 90)}})]
      (map
        (fn [option i]
          [slice {:x 0 :y 0 :num i :total (count options) :width width :offset offset :radius radius} option])
        options
        (range 0 (count options))))])

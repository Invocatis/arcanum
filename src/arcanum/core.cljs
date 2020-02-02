(ns arcanumcore
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanummodule :as module]
    [arcanummodule.calculator.core :as calculator]
    [arcanummodule.keyboard.touch.core :as keyboard]
    [arcanummodule.input.core :as input]
    [arcanummodule.swappane.core :as swappane :refer [swappane]]
    [arcanumcomponents.selector.tabs.core :refer [tabs]]
    [arcanumcomponents.wheel.component :as wheel]
    [hiccup-icons.fa :as fa]))

(def test-state (atom {:selections {} :order []}))

(defn data
  []
  {:swappane {:args [test-state]}
   :tabs {:target (swappane/module test-state)}})

(def wheel (wheel/component (reagent/atom nil)))
(def show (reagent/atom nil))

(defn w
  [params]
  [wheel (merge params {:radius 200 :width 100 :offset 135})
    {:id :credit :content [:h1 "credit"] :icon fa/credit-card}
    {:id :cash :content [:h1 "cash"] :icon fa/money-bill-alt}
    {:id :nosale :content [:h1 "no sale"] :icon fa/times-circle}
    {:id :dove :content [:h1 "void"] :icon fa/ban-solid}])

(defn nw
  [params]
  (into
    [wheel (merge params {:radius 200 :width :80})]
    (map (fn [n] {:id n :content [:h1 n] :icon [:h1 n]}) (range 0 2))))

(defn base
  []
  [:div {:on-mouse-down (fn [ev] (println show) (reset! show [(.-pageX ev) (.-pageY ev)]))
         :on-mouse-up #(reset! show nil)
         :style {:height "100vh" :width "100vw"}}
   [:div.x]
   (when-let [[x y] @show]
     [w {:x x :y y}])])
   ; [:button {:style {:clip-path "circle(100px at center)" :width "300px" :height "300px" :position :absolute :left "360px" :top "360px" :z-index 1} :on-click #(swap! show not)}]


(defn render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (render))

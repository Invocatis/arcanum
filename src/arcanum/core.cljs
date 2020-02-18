(ns arcanum.core
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanum.module :as module]
    [arcanum.util :as util]
    [arcanum.module.calculator.core :as calculator]
    [arcanum.module.keyboard.touch.core :as keyboard]
    [arcanum.module.input.core :as input]
    [arcanum.components.wheel.component :as wheel]
    [hiccup-icons.fa :as fa]
    [arcanum.module.notification.core :as notification]
    [arcanum.css.animation]
    [arcanum.module.panel.core :as panel]
    [arcanum.module.data.toggle.components :as toggle]
    [arcanum.module.data.value.core :as value]
    [arcanum.module.data.value.map :as mapper]
    [arcanum.pos.module.tabpage.core :as tabpage]))

(def test-state (atom {:selections {} :order []}))

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

; (defn base
;   []
;   [:div {:on-mouse-down (fn [ev] (println show) (reset! show [(.-pageX ev) (.-pageY ev)]))
;          :on-mouse-up #(reset! show nil)
;          :style {:height "100vh" :width "100vw"}}
;    (when-let [[x y] @show]
;      [w {:x x :y y}])])



(defn base
  []
  [:div {:style {:height "100vh" :width "100vw" :position :absolute :top 0}}
    [:style arcanum.css.animation/css]
    [tabpage/view {}]])


(defn render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (render))

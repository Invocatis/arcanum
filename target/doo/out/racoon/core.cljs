(ns racoon.core
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanum.registrar :as registrar]
    [arcanum.component :as component]
    [arcanum.module :as module]
    [arcanum.css.animation]
    [racoon.view.core :as view]))

(defn base
  []
  (reduce
    (fn [acc design]
      (retort/brew design acc))
    (retort/brew
      (module/design (reagent/atom {}))
      [:div {:style {:height "100vh" :width "100vw" :position :absolute :top 0 :left 0}}
        (component/style)
        [:style arcanum.css.animation/css]
        [view/base {}]])
    (component/design)))

(defn ^:export render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (render))

(ns pos.core
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanum.module :as module]
    [arcanum.component :as component]
    [arcanum.registrar :as registrar]
    [arcanum.util :as util]
    [arcanum.css.animation]
    [hiccup-icons.fa :as fa]
    [pos.component.tabpage.core :as tabpage]))

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
        [tabpage/view {}]])
    (component/design)))

(defn render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (render))

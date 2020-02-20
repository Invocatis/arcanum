(ns arcanum.core
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanum.module :as module]
    [arcanum.component :as component]
    [arcanum.registrar :as registrar]
    [arcanum.util :as util]
    [arcanum.css.animation]
    [hiccup-icons.fa :as fa]
    [arcanum.pos.module.tabpage.core :as tabpage]))

(defn base
  []
  (retort/brew (retort/design-merge (component/design) (module/design (reagent/atom {})))
   [:div {:style {:height "100vh" :width "100vw" :position :absolute :top 0}}
     [:style arcanum.css.animation/css]
     [tabpage/view {}]]))

(defn render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (render))

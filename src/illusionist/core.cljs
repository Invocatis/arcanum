(ns illusionist.core
  (:require
    [reagent.core :as reagent]
    [retort.core :as retort]
    [arcanum.registrar :as registrar]
    [arcanum.component :as component]
    [arcanum.module :as module]
    [arcanum.css.animation]
    [arcanum.design]
    [illusionist.router :refer [app-routes]]
    [illusionist.view.tabpage :as tabpage]
    [illusionist.client :as client]
    [illusionist.data.design :as data]))

(defonce route (reagent/atom {}))

(defonce state (reagent/atom {}))

(defmulti current-page :page)

(defmethod current-page :home
  [_])

(defmethod current-page :tab
  [{:keys [params]}]
  [tabpage/base {}])

(defmethod current-page :default
  [_]
  [:h1 "Uh oh. Oopsies. Wrong page..."])

(defn base
  []
  (reduce
    (fn [acc design]
      (retort/brew design acc))
    (retort/brew
      (retort/design-merge
        arcanum.design/design
        (client/design state {:host "http://localhost" :port 1234})
        (module/design (reagent/atom {})))
      [:div {:style {:height "100vh" :width "100vw" :position :absolute :top 0 :left 0}}
        (component/style)
        [:style arcanum.css.animation/css]
        [current-page @route]])
    (component/design)))


(defn ^:export render
  []
  (reagent/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (app-routes route)
  (render))

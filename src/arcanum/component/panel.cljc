(ns arcanum.component.panel
  (:require
   [garden.core :as garden]
   [garden.selectors :as s :refer [attr=]]
   [arcanum.module :as module]))

(def style
  (garden/css
   [:.panel
    [(s/& (attr= :status :close))
     [:*
      {:display :none}]]]))

(def design
  {:data
   {:.panel
    (fn [{:keys [toggle] :as params}]
      {:status (module/call! toggle :value)})}})

(def component
  {:design design
   :style style})

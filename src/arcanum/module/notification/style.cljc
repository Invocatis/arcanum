(ns arcanum.module.notification.style
  (:require
    [garden.core :refer [css]]
    [garden.selectors :as s :refer [> & attr=]]
    [garden.stylesheet :as ss :refer [at-keyframes]]))

(defn static
  [params]
  (css
   [:.notification-board
    {:pointer-events :none}

    [:*
     {:pointer-events :all}

     [:.content]

     [:.dismiss
      {:text-align :center}]]]))

(defn dynamic
  [{:keys [notification] :as x}]
  (css [:.notification-board [:.notification notification]]))

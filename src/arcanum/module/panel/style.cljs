(ns arcanum.module.panel.style
  (:require
    [garden.core :as garden]
    [garden.selectors :as s :refer [& attr=]]))


(def static
  (garden/css
   [:.panel
    {:pointer-events :none}

    [:* {:pointer-events :all}]

    [(s/& (attr= :status :close))
     [:.background
      {:display :none}
      :.content
      {:display :none}]
     [:*
      {:display :none}]]
    [:.background
     {:pointer-events :all
      :position :absolute
      :top 0
      :left 0
      :width "100%"
      :height "100%"}]

    [:.content
     {:pointer-events :none
      :position :absolute
      :top 0
      :left 0
      :width "100%";}]]))
      :height "100%"}
     [:*
      {:pointer-events :all}]]]))

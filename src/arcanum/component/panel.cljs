(ns arcanum.component.panel
  (:require
   [garden.core :as garden]
   [garden.selectors :as s :refer [attr=]]
   [arcanum.module :as module]))

(def style
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

(def design
  {:mold
   {:.panel (fn [[tag attributes & children]]
              [tag attributes
               [:style style]
               [:div.background attributes]
               (into [:div.content attributes] children)])}
   :data
   {:.panel
    (fn [{:keys [toggle]}]
      {:status (module/call! toggle :value)})}
   :transition
   {:.background {:on-click #(module/call! (:toggle %) :toggle)}}})

(def component
  {:design design})

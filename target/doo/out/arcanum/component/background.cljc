(ns arcanum.component.background
  (:require
    [garden.core :as garden]
    [garden.selectors :as s :refer [attr=]]
    [arcanum.module :as module]))

(def style
  (garden/css
   [:.background
    {:position :absolute
     :top 0
     :left 0
     :width "100%"
     :height "100%"}]))


(def design
  {:data
   {:.background
    (fn [{:keys [toggle]}]
      {:status (module/call! toggle :get)})}
   :transition
   {:.background {:on-mouse-down #(module/call! (:toggle %) :toggle)}
    :.background>* {:on-mouse-down #(.stopPropagation %2)}}})

(def component
  {:design design
   :style style})

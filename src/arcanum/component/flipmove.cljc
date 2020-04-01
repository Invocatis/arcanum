(ns arcanum.component.flipmove
  (:require
   [reagent.core :as reagent]
   [retort.hiccup :as hiccup]
   ["react-flip-move" :as FlipMove]))

(def adapted
  (reagent/adapt-react-class FlipMove))

(def design
  {:mold
   {:flipmove
     (fn [hiccup]
       (let [[tag & rest] (hiccup/strip-tag hiccup)]
         (into [adapted] rest)))}})

(def component
  {:design design})

(ns arcanum.design
  (:require
   [retort.core :as retort]))

(def design
  {:mold
   {:design (fn [[_ design & children]]
              {:design #(retort/design-merge % design)
               :hiccup (into [:<>] children)})}})

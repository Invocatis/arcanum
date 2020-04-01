(ns arcanum.css.animation
  (:require
   [garden.core :as garden]
   [garden.stylesheet :as ss :refer [at-keyframes]]))

(def css
  (garden/css
   [(at-keyframes :slide-in-left
     [:from  {:transform "translate(-100%,0%)"}])
    (at-keyframes :slide-in-right
     [:from  {:transform "translate(100%,0%)"}])
    (at-keyframes :slide-in-bottom
     [:from  {:transform "translate(0%, -100%)"}])
    (at-keyframes :slide-out-left
     ["100%" {:transform "translate(-100%,0%)"}])
    (at-keyframes :slide-out-right
     ["100%" {:transform "translate(100%,0%)"}])]))

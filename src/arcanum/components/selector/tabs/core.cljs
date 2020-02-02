(ns arcanumcomponents.selector.tabs.core
  (:require
    [arcanumcomponents.selector.tabs.design :refer [design]]
    [arcanumcomponents.selector.tabs.view :as view]
    [retort.core :as retort]
    [retort.hiccup :as h]))

(defn tabs
  [{:keys [target]}]
  (retort/brew (design target) [view/tabs {:class "tabs"}]))

(ns arcanummodule.swappane.core
  (:require
    [retort.core :as retort]
    [arcanummodule.swappane.design :refer [design]]
    [arcanummodule.select.core :as select]))

(defn module
  [state]
  {:extends [(select/module state)]
   :state {:default {}
           :atom state}})

(defn swappane
  [params state]
  (retort/brew (design (module state)) [:div.swappane params]))

(ns arcanummodule.swappane.design
  (:require
    [arcanummodule :as module]))

(defn data
  [module]
  {:.swappane {:args [(module/call! module :selected)]}})

(defn design
  [module]
  {:data (data module)})

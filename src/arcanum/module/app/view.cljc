(ns arcanum.module.app.view)

(defn view
  [{:keys [name content]}]
  [:div.app {:name name} content])

(defn data
  [state]
  {:#base {:args (map view (vec (get state :apps)))}})

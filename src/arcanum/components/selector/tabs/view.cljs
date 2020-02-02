(ns arcanumcomponents.selector.tabs.view)

(defn tab
  [params]
  [:button params])

(defn tabs
  [params & keys]
  (into [:div params] (map (fn [key] [tab {:class "tab" :key key}]) keys)))

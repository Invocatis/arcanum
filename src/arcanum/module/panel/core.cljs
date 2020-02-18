(ns arcanum.module.panel.core
  (:require
    [arcanum.module :as module]
    [arcanum.module.data.toggle.core :as toggle]
    [arcanum.module.panel.style :as style]))

(defn module
  [toggle]
  {:extends [toggle]})

(defn design
  [module]
  {:data
   {:.panel
    {:attributes {:status (module/call! module :value)}
     :!args (fn [attributes & children]
              [[:style style/static]
               [:div.background]
               (into [:div.content] children)])}}
   :transition
   {:.background {:on-click #(module/call! module :toggle)}}})

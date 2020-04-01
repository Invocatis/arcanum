(ns arcanum.component.select
  (:require
   [arcanum.module :as module]
   [arcanum.hiccup :as hiccup]))

(def design
  {:mold
   {:.select
    (fn [[tag {:keys [select] :as attrs} & children]]
      (into [tag attrs] (map #(hiccup/attr-assoc % :select select) children)))}
   :data
   {:.option
    (fn [{:keys [select value]}]
      (if (module/call! select :selected? value)
        {:status "selected"}
        {:status "unselected"}))}
   :transition
   {:button.option
    {:on-mouse-down
      (fn [{:keys [select value]}]
        (if (module/call! select :selected? value)
          (module/call! select :unselect value)
          (module/call! select :select value)))}}})

(def component
  {:design design})

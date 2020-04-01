(ns arcanum.module.notification.view
  (:require
    [reagent.core :as r]
    [hiccup-icons.fa :as fa]))

(defn notification
  [{:keys [content key params dismiss] :as notification}]
  [:div.notification
    (assoc params :key key)
    [:div.content {} content]
    [:button.dismiss {:key key} (or dismiss fa/times-solid)]])

(defn nb
  [params & notifications]
  (into
    [:div.notification-board]
    (map (fn [x] (if (map? x) (notification x) x)) notifications)))

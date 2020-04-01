(ns arcanum.module.notification.core
  (:require
    [retort.core :as retort]
    [arcanum.module :as module]
    [arcanum.module.notification.view :as view]
    [arcanum.module.notification.style :as style]))


(defn dismiss
  [{:keys [order notifications] :as state} key]
  {:order (into #queue [] (remove #(= % key) order))
   :notifications (dissoc notifications key)})

(def design
  {:data
   {:.notifications (fn [{:keys [notification]}]
                     {:args (map (fn [c] [:div.notification c]) (reverse (module/call! notification :notifications)))})}

   :transition
   {:.dismiss (fn [{:keys [notification]}]
                {:on-click #(module/call! notification :dismiss (:key %))})}

   :mold {:.notifcations
          (fn [[tag attributes & children]]
            (into [tag attributes [:style style/static]] children))}})

(defn -module
  [state attributes]
  {:state
    {:default {}
     :atom state}
   :design design
   :api
    {:notifications (fn [] (locking state
                             (map #(get-in @state [:notifications %]) (:order @state))))
     :dismiss (fn [key]
                (when (get-in @state [:notifications key])
                  (js/setTimeout (fn [] (swap! state #(dismiss % key))) 0)))
     :notification
     (fn [notification]
       (let [key (or (:key notification) (gensym))]
         (swap! state (fn [state] (-> state
                                      (update :notifications assoc key (:content notification))
                                      (update :order conj key))))
         key))}})

(defn module
  [state {:keys [timeout] :as attributes}]
  (let [module (-module state attributes)]
    (update-in module [:api :notification]
               (fn [f]
                 (fn [notification]
                   (let [key (f notification)]
                     (js/setTimeout (fn [] (module/call! module :dismiss key)) timeout)))))))

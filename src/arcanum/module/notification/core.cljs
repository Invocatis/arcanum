(ns arcanum.module.notification.core
  (:require
    [retort.core :as retort]
    [arcanum.module :as module]
    [arcanum.module.notification.view :as view]
    [arcanum.module.notification.design]
    [arcanum.module.notification.style :as style]))

(defn dismiss
  [{:keys [order notifications] :as state} key]
  {:order (into #queue [] (remove #(= % key) order))
   :notifications (dissoc notifications key)})

(defn -module
  [state]
  {:state
    {:default {}
     :atom state}
   :api
    {:notifications (fn [] (locking state
                             (map #(get-in @state [:notifications %]) (:order @state))))
     :dismiss (fn [key]
                (when (get-in @state [:notifications key])
                  (swap! state update-in [:notifications key] assoc-in [:params :dismissing] "true")
                  (js/setTimeout (fn [] (swap! state #(dismiss % key))) 0)))
     :notification
     (fn [notification]
       (let [key (or (:key notification) (gensym))]
         (swap! state (fn [state] (-> state
                                      (update :notifications assoc key
                                              (if (map? notification)
                                                (merge notification {:key key})
                                                {:key key :content notification}))
                                      (update :order conj key))))
         key))}})

(defn module
  [state]
  (let [module (-module state)]
    (update-in module [:api :notification]
               (fn [f]
                 (fn [notification]
                   (let [key (f notification)]
                     (js/setTimeout (fn [] (module/call! module :dismiss key)) 10000)))))))

(def design arcanum.module.notification.design/design)

(defn view
  [module & [style]]
  {:core (fn [params & content]
           [:<>
             [:style [style/dynamic style]]
             [:style [style/static nil]]
             (retort/brew (design module) (into [view/nb params] content))])})

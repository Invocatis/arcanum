(ns arcanum.pos.module.tabpage.core
  (:require
   [retort.core :as retort]
   [reagent.core :as reagent]
   [hiccup-icons.fa :as fa]
   [hiccup-icons.mdi :as mdi]
   [arcanum.icons :as icons]
   [arcanum.module :as module]
   [arcanum.util :as util]
   [arcanum.module.notification.core :as notification]
   [arcanum.module.data.toggle.core :as toggle]
   [arcanum.module.data.value.core :as value]
   [arcanum.module.data.value.map :as mapper]
   [arcanum.module.select.core :as select]))



(def toggle (toggle/module (reagent/atom false) {:default "close" :toggler #(if (= % "close") "open" "close")}))

(def last-item (value/module (reagent/atom nil)))

; (def item-list (mapper/module (value/module (reagent/atom [])) util/group-count :get))

(def select (select/module (reagent/atom nil)))

(def select-button (select/button select))

(defn item-button
  [{:keys [items] :as attrs} n])
  ; [:button.item-button {:on-click #(do ;(module/call! last-item :set n)
  ;                                      ;(module/call! notifications :notification {:dismiss fa/beer-solid})
  ;                                      (module/call! items :update conj n)
  ;                                      (util/unique-timeout ::last-item
  ;                                                           (fn [] (module/call! last-item :set nil)) 1500))}
  ;   n])

(defn item-entry
  [{:keys [value count] :as params}]
  [:div.item-entry params
   [:div.count count]
   [:div.value value]])

(def items ["Pilsner" "Is this beer?" "Stout" "Porter" "Ipa" "Jort Munder" "Muncheez" "Knowledge is Sour" "Always Cloudy" "Alpaca Kisses" "Altbier" "Milkshake Jacuzzi"])

(defn menu
  [{:keys [items] :as attrs}]
  [:div.menu
   {}
   (into
    [:div.section
      [:div.selectors
       [select-button {:value :pint} mdi/beer]
       [select-button {:value :taster} mdi/glass-tulip]
       [select-button {:value :growler} icons/jug]
       [select-button {:value :crowler} icons/can]]]
    (map (partial item-button {:items items}) items))])

(defn viewx
  [params]
  [:div.tabpage params
   [:module#tabpage-item-list.toggle {:default "close" :toggler #(if (= % "close") "open" "close")}
    [:button.close mdi/close-circle]
    (let [last-item (or (module/call! last-item :get) "")]
      [:div.last-item {:value last-item} last-item])
    [menu]
    [:module#items.notification
      ; [(:core (notification/view notifications)) {:side "left"}
       [:div.y
        [:div.panel
         [:div.x [:button.toggle {:class "close"} fa/chevron-left-solid]]]]]]])
          ; (into [:div.item-list] (map (fn [[i c]] [item-entry {:value i :count c}]) (module/call! item-list :get)))]]]]]])


(defn b
  [{:keys [notification]} & children]
  (println notification)
  (into [:button.notifier {:on-click #(module/call! notification :notification {:key :asdf :content [:h1 "hello"]})}] children))

(defn item-list
  [{:keys [items] :as params}]
  (into
    [:div.item-list (dissoc params :items)]
    (map (fn [[i c]] [item-entry {:value i :count c}]) items)))

(defn view
  [params]
  [:div.tabpage params
   [:module#tabpage-item-list.toggle {:default "close" :toggler #(if (= % "close") "open" "close")}
    [:button.toggle.items
     {:alchemy {:module :tabpage-item-list :as :toggle}}
     fa/th-list-solid]
    [:module#item-list.value {}
      [:div.panel {:alchemy {:module :tabpage-item-list :as :toggle}}
       [:div.panel-content [:button.toggle {:class "close"} fa/chevron-left-solid]
        [item-list {:alchemy {:module :item-list :call :get :args [] :as :items}}]]]]

    [:module#item-list-notification.notification {:timeout 11000}
     [:div.notifications {:alchemy {:module :item-list-notification :as :notification}}]
     [b {:alchemy {:module :item-list-notification :as :notification}}]]]])

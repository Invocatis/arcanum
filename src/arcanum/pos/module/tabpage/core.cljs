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
   [arcanum.module.panel.core :as panel]
   [arcanum.module.data.toggle.core :as toggle]
   [arcanum.module.data.value.core :as value]
   [arcanum.module.data.value.map :as mapper]
   [arcanum.module.select.core :as select]))



(def notifications (notification/module (reagent/atom {:order #queue []})))

(def toggle (toggle/module (reagent/atom false) {:default "close" :toggler #(if (= % "close") "open" "close")}))
(def panel (panel/module toggle))

(def last-item (value/module (reagent/atom nil)))

(def item-list (mapper/module (value/module (reagent/atom [])) util/group-count :get))

(def select (select/module (reagent/atom nil)))

(def select-button (select/button select))

(defn item-button
  [n]
  [:button.item-button {:on-click #(do (module/call! last-item :set n)
                                       (module/call! notifications :notification {:dismiss fa/beer-solid})
                                       (module/call! item-list :update conj n)
                                       (util/unique-timeout ::last-item
                                                            (fn [] (module/call! last-item :set nil)) 1500))}
    n])

(defn item-entry
  [{:keys [value count] :as params}]
  [:div.item-entry params
   [:div.count count]
   [:div.value value]])

(def items ["Pilsner" "Is this beer?" "Stout" "Porter" "Ipa" "Jort Munder" "Muncheez" "Knowledge is Sour" "Always Cloudy" "Alpaca Kisses" "Altbier" "Milkshake Jacuzzi"])

(defn menu
  []
  [:div.menu
   {}
   (into
    [:div.section
      [:div.selectors
       [select-button {:value :pint} mdi/beer]
       [select-button {:value :taster} mdi/glass-tulip]
       [select-button {:value :growler} icons/jug]
       [select-button {:value :crowler} icons/can]]]
    (map item-button items))])

(defn view
  [params]
  (retort/brew
   (panel/design toggle)
   [:div.tabpage params
    [:button.close mdi/close-circle]
    (let [last-item (or (module/call! last-item :get) "")]
      [:div.last-item {:value last-item} last-item])
    [menu]
    [(:core (notification/view notifications)) {:side "left"}
     [:div.y
      [:div.panel {}
       [:div.x [(toggle/button toggle) {:class "close"} fa/chevron-left-solid]
        (into [:div.item-list] (map (fn [[i c]] [item-entry {:value i :count c}]) (module/call! item-list :get)))]]
      [(toggle/button toggle) {:class "items" :status (module/call! toggle :get)} fa/th-list-solid]]]]))

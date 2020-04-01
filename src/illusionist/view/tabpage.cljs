(ns illusionist.view.tabpage
  (:require
   [illusionist.view.menu :as menu]
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
   [arcanum.module.data.value.map :as mapper]))

(defn remove-one
  [coll v]
  (into (empty coll)
        (concat (take-while #(not= % v) coll)
                (rest (drop-while #(not= % v) coll)))))

(defn item-entry
  [{:keys [value count tab] :as params}]
  [:div.item-entry {}
   [:div.count count]
   [:div.value (:name value)]
   [:button.remove
    {:on-mouse-down #(module/call! tab :update update :items remove-one value)}
    (if (= 1 count) mdi/close mdi/minus)]])

(defn item-section
  [{:keys [type] :as attrs} & children]
  (into [:div.item-section attrs [:div.header (if type (name type) "")]] children))

(defn item-list
  [{:keys [side-panel-tab tab] :as params}]
  (into
   [:div.item-list {}]
   (map
     (fn [[type l]]
       (into
         [item-section {:type type :status (if (or (= side-panel-tab (keyword type)) (= side-panel-tab :all) (nil? side-panel-tab)) "show" "hidden")}]
         (map
           (fn [[i c]]
             [item-entry {:tab tab :value i :count c}])
           (util/group-count (sort-by :name l)))))
     (into
       (sorted-map)
       (group-by :type
        (get-in (module/call! tab :get) [:items]))))))

(defn side-panel
  [{:keys [tab]}]
  [:div.side-panel {}
   [:module#side-panel-tabs.select {:value :all :allow-deselect false}
    [:div.select.single.options {:alchemy {:module :side-panel-tabs :as :select}}
     [:button.option {:value :draft} mdi/beer]
     [:button.option {:value :food} mdi/hamburger]
     [:button.option {:value :swag} mdi/tshirt-crew]
     [:button.option {:value :misc} mdi/asterisk]
     [:button.option {:value :all} mdi/circle]]
    [item-list {:alchemy {:module :side-panel-tabs :call :get :as :side-panel-tab} :tab tab}]]])

(defn base
  [params]
  [:module.value#tab {}
   [:div.tabpage params
    [:module.toggle {:id ::item-list :default "close" :toggler #(if (= % "close") "open" "close")}
     [:button.toggle.items
      {:alchemy {:module ::item-list :as :toggle}}
      fa/th-list-solid]
     [menu/base]
     [:div.background {:alchemy {:module ::item-list :as :toggle}}
      [:div.panel {:alchemy {:module ::item-list :as :toggle}}
       [side-panel {:alchemy {:module :tab :as :tab}}]]]]]])
   ; [:div.options {}
   ;  [:button.close {} mdi/check-all]
   ;  [:button.back {} mdi/chevron-up]]])

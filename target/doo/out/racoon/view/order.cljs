(ns racoon.view.order
  (:require
   [retort.core :as retort]
   [reagent.core :as r]))

(defn item-element
  [{:keys [item]}]
  [:div.item {}
   [:div.item-name {} (:name item)]])

(defn category-element
  [{:keys [title items]}]
  [:div.items
   {}
   [:h2 {} title]
   (into
     [:div {}]
     (map (fn [item] [item-element {:item item}]) items))])

(defn page
  [{:keys [title categories]}]
  [:div.page {}
   [:h1 title]
   (into
     [:div]
     (map
      (fn [[title items]] [category-element {:title title :items items}])
      categories))])

(defn -menu
  [{:keys [menu]}]
  [:module#menu-tab.select {:type :single}
    [:div.menu {}
     (into
       [:div.select.multi.menu-tabs {:alchemy {:module :menu-tab :as :select}}]
       (map (fn [i] [:button.option {:value i} (name i)]) (keys menu)))
     (into
       [:div.menu-content {}]
       (map (fn [[title categories]] [page {:title title :categories categories}]) menu))]])

(defn menu-design
  [state]
  {:transititon
   {:.item {:on-click #(swap! state update-in [:sale :items] conj (:item %))}}})

(defn menu
  [attrs state]
  (retort/brew (menu-design state) [-menu attrs]))

(defn item-entry
  [{:keys [item count]}]
  [:div.item-entry {}
   [:div.name (:name item)]
   [:div.count count]])

(defn sale-list
  [{:keys [items]}]
  (into
   [:div.sale-list {}]
   (map (fn [{:keys [item count]}] [item-entry {:item item :count count}]) items)))

(defn checkout
  []
  [:a.checkout {}
   "Checkout"])

(defn saleElement
  [{:keys [sale]}]
  (println sale)
  [:div.sale
   [sale-list {:items (:items sale)}]
   [checkout {}]])

(defn sale-design
  [state]
  {:data
   {:saleElement
    {:sale (-> @state :sale)}}})

(defn sale
  [attrs state]
  (retort/brew (sale-design state) [saleElement attrs]))

(def m
  {:appetizers {}
   :entrees {}
   :beer {:crowlers [{:name "Altbier"} {:name "Pilsner"}]
          :singles [{:name "Alpaca Kisses"}]
          :4-Packs [{:name "Alpaca Kisses"}]}})

(def state
  (r/atom {:sale {:items [{:item {:name "Alpaca Kisses"} :count 100}]}}))

(defn base
  []
  [:div.base {}
   [menu {:menu m} state]
   [sale {} state]])

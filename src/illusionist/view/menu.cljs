(ns illusionist.view.menu
  (:require
   [arcanum.module :as module]
   [reagent.core :as r]))

(defn item-element-style
  [n-items]
  (let [no-cols (Math/ceil (/ n-items 12))
        no-cols (if (zero? no-cols) 1 no-cols)
        no-rows (Math/ceil (/ n-items no-cols))]
    {:width (str "calc(" (/ 100 no-cols) "% - 14px)")
     :height (str "calc(" (/ 100 no-rows) "% - 14px)")}))

(defn item-element
  [{:keys [item] :as attr}]
  [:button.item (merge attr {:value item}) (:name item)])

(defn category-element
  [{:keys [category items] :as attr}]
  [:div.category attr
    [:div.title {} (:name category)]
    (into
      [:div.content {}]
      (map (fn [item] [item-element {:item item :style (item-element-style (count items))}]) items))])

(defn category-style
  [categories category]
  (let [margin 3
        |c| (count (get categories category))
        sum-c (apply + (map count (vals categories)))
        weight (/ |c| sum-c)]
    ; (if (< (count (get categories category)) 6)
    ;   {:width (str (* 2 (- (* 100 weight) 5)) "%") :height "40%"}
    {:width (str (+ (- (* 100 weight) margin) (/ margin (count categories))) "%")
     :height "100%"
     :margin-right (if-not (= (key (last categories)) category)
                     (str margin "%")
                     "0%")}))

(defn page
  [{:keys [group categories selected]}]
  (into
    [:div.page {:style {:display (if (= (:page group) selected) :block :none)}}]
     ; [:h1 group]]
    (map
     (fn [[category items]] [category-element {:category category :items items :style (category-style categories category)}])
     categories)))

(defn -menu
  [{:keys [menu]}]
  [:module#menu-tab.select {:type :single :allow-deselect false :value :beer}
    [:div.menu {}
     (into
       [:div.select.multi.menu-tabs {:alchemy {:module :menu-tab :as :select}}]
       (map (fn [page] [:button.option {:value (:page page)} (name (:page page))]) (keys menu)))
     (into
       [:div.content {}]
       (map (fn [[group categories]] [page {:alchemy {:module :menu-tab :call :get :as :selected} :group group :categories categories}]) menu))]])

(defn menu-design
  [tab]
  {:transition
   {:button.item {:on-click #(module/call! tab :update update-in [:items] conj (:item %))}}})

(defn menu
  [{:keys [menu tab] :as attr} state]
  [:design (menu-design tab) [-menu (assoc attr :menu menu)]])

(defn item-entry
  [{:keys [item count]}]
  [:div.item-entry {}
   [:div.name (:name item)]
   [:div.count count]])

(defn sale-list
  [{:keys [items]}]
  (conj
   (into
    [:div.sale-list {}]
    (map (fn [{:keys [item count]}] [item-entry {:item item :count count}]) items))))

(defn sale-element
  [{:keys [sale]}]
  [:div.sale
   [sale-list {:items (:items sale)}]])

(defn sale-design
  [state])
  ; {:data
  ;  {:sale-element
  ;   {:sale (-> @state :sale)}}})

(defn sale
  [attrs state]
  [:design (sale-design state) [sale-element attrs]])

(defn base
  []
  [:div.base
   [menu {:illusionist {:call [:get "/menu" {}] :as :menu}
          :alchemy {:module :tab :as :tab}}]
   [sale {}]])

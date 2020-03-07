(ns pos.component.tabpage.core
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
   [arcanum.module.data.value.map :as mapper]))

(defn remove-one
  [coll v]
  (into (empty coll)
        (concat (take-while #(not= % v) coll)
                (rest (drop-while #(not= % v) coll)))))

(defn item-button
  [{:keys [list notifications] :as attrs} item]
  [:button.item-button {:on-click (fn [_]
                                    (module/call! list :update conj item))}
    (:name item)])

(defn item-entry
  [{:keys [value count list] :as params}]
  [:div.item-entry {}
   [:div.count count]
   [:div.value (:name value)]
   [:button.remove
    {:on-mouse-down #(module/call! list :update remove-one value)}
    (if (= 1 count) mdi/close mdi/minus)]])

(defn item-section
  [{:keys [type] :as attrs} & children]
  (into [:div.item-section attrs [:div.header (name type)]] children))

(def items [{:type :drink :name "Pilsner"}
            {:type :drink :name "Is this beer?"}
            {:type :drink :name "Stout"}
            {:type :drink :name "Porter"}
            {:type :drink :name "Ipa"}
            {:type :drink :name "Jort Munder"}
            {:type :drink :name "Muncheez"}
            {:type :drink :name "Knowledge is Sour"}
            {:type :drink :name "Always Cloudy"}
            {:type :drink :name "Alpaca Kisses"}
            {:type :drink :name "Altbier"}
            {:type :drink :name "Milkshake Jacuzzi"}])

(def food [{:type :food :name "Burger"}
           {:type :food :name "Boli"}
           {:type :food :name "Salad"}
           {:type :food :name "Cheese Board"}
           {:type :food :name "Hummus"}
           {:type :food :name "Special Sauce"}])

(def swag [{:type :swag :name "Shirt"}
           {:type :swag :name "Hat"}
           {:type :swag :name "Pint Glass"}
           {:type :swag :name "Sweatshirt"}
           {:type :swag :name "Tanktop"}
           {:type :swag :name "Special Sauce"}])

(defn flightbar
  [params]
  [:div.section.flightbar params
   [:module#flightbar-selection.select {:type :multi}
    (into
      [:div.select.multi {:alchemy {:module :flightbar-selection :as :select}}]
      (map (fn [i] [:button.option.flight-option.item-button {:value i} (:name i)]) items))
    [:button.flight "Flight"]]])

(defn drinks
  [{:keys [items item-list notifications] :as attrs}]
  (into
   [:div.main.section (dissoc attrs :items :item-list)]
   ; [:module#menu-drinks.select {:value :pint}
   ;   [:div.select.single {:alchemy {:module :menu-drinks :as :select}}
   ;    [:button.option {:value :pint} mdi/beer]
   ;    [:button.option {:value :taster} mdi/glass-tulip]
   ;    [:button.option {:value :growler} icons/jug]
   ;    [:button.option {:value :crowler} icons/can]]
   (map (partial item-button {:list item-list :notifications notifications}) items)))

(defn foods
  [{:keys [item-list :as attrs]}]
  (into
    [:div.food.section (dissoc attrs :item-list)]
    (map (partial item-button {:list item-list}) food)))

(defn swags
  [{:keys [item-list :as attrs]}]
  (into
    [:div.food.section (dissoc attrs :item-list)]
    (map (partial item-button {:list item-list}) swag)))

(defn menu
  [attrs]
  (println attrs)
  [:div.menu
   {}
   [drinks attrs]
   [foods attrs]
   [swags attrs]])
   ; [flightbar {}]])


(defn item-list
  [{:keys [list tab] :as params}]
  (into
   [:div.item-list {}]
   (map
     (fn [[type l]]
       (into
         [item-section {:type type :status (if (or (= tab type) (= tab :all) (nil? tab)) "show" "hidden")}]
         (map
           (fn [[i c]]
             [item-entry {:list list :value i :count c}])
           (util/group-count (sort-by :name l)))))
     (group-by :type
      (module/call! list :get)))))

(defn side-panel
  [{:keys [list]}]
  [:div.side-panel {}
   [:module#side-panel-tabs.select {:value :all :allow-deselect false}
    [:div.select.single.options {:alchemy {:module :side-panel-tabs :as :select}}
     [:button.option {:value :drink} mdi/beer]
     [:button.option {:value :food} mdi/hamburger]
     [:button.option {:value :swag} mdi/tshirt-crew]
     [:button.option {:value :misc} mdi/asterisk]
     [:button.option {:value :all} mdi/circle]]
    [item-list {:alchemy {:module :side-panel-tabs :call :get :as :tab} :list list}]]])

(defn view
  [params]
  [:div.tabpage params
   [:module.toggle {:id ::item-list :default "close" :toggler #(if (= % "close") "open" "close")}
    [:button.toggle.items
     {:alchemy {:module ::item-list :as :toggle}}
     fa/th-list-solid]
    [:module#item-list.value {:value []}
        [menu {:alchemy {:module :item-list :as :item-list}
               :items items}]
        [:div.background {:alchemy {:module ::item-list} :as :toggle}
         [:div.panel {:alchemy {:module ::item-list :as :toggle}}
          [side-panel {:alchemy {:module :item-list :as :list}}]]]]]
   [:div.options {}
    [:button.close {} mdi/check-all]
    [:button.back {} mdi/chevron-up]]])


; (def design
;   {:transition
;    {:.item-button
;      {:on-mouse-down (fn [{:keys [list notifications]}]
;                        (println "djfklsajfdsakljkl")
;                        (module/call! list :update conj item)
;                        (module/call! notifications :notify [:h1 "hello"]))}}})

; (defn view
;   [params]
;   (retort/brew design [-view params]))

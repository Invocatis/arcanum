(ns illusionist.core
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as rd]
    [retort.core :as retort]
    [arcanum.registrar :as registrar]
    [arcanum.component :as component]
    [arcanum.module :as module]
    [arcanum.css.animation]
    [arcanum.design]
    [illusionist.router :refer [app-routes]]
    [illusionist.view.tabpage :as tabpage]
    [illusionist.client :as client]
    [illusionist.data.design :as data]))

(defonce route (reagent/atom {}))

(defonce state (reagent/atom {}))

(defmulti current-page :page)

(defmethod current-page :home
  [_])

(defmethod current-page :tab
  [{:keys [params]}]
  [tabpage/base {}])

(defmethod current-page :default
  [_]
  [:h1 "Uh oh. Oopsies. Wrong page..."])

(def module-state (reagent/atom {}))
; ======

(def words
  ["ice" "cream" "chocolate" "pastry" "pudding" "raspberry" "mousse"
   "vanilla" "wafer" "waffle" "cake" "torte" "gateau" "pie" "cookie"
   "cupcake" "mini" "hot" "caramel" "meringue" "lemon" "marzipan" "mocha"
   "strawberry" "tart" "custard" "fruit" "baklava" "jelly" "banana" "coconut"])

(defn rand-name []
  (clojure.string/capitalize (clojure.string/join " " (take (+ 2 (rand-int 5)) (shuffle words)))))

(def desserts (reagent/atom ()))

; (add-watch desserts :asdf (fn [k r o n] (println n)))

(defn make-a-dessert [e]
  (swap! desserts conj {:id (random-uuid)
                        :name (rand-name)}))

(defn make-many-desserts [n]
  (dotimes [i n]
    (make-a-dessert nil)))

(defn color-for [x]
  (str "#" (.toString (bit-and (hash x) 0xFFFFFF) 16)))

(defn dessert-item [attr {:keys [id name]}]
  ; (println 'render! name)
  [:li.dessert
   {:key id}
   [:div {}
    [:svg {:width 50 :height 50}
     [:circle
      {:r 20 :cx 25 :cy 25 :fill (color-for name)}]
     [:rect {:x 15 :y 15 :width 20 :height 20}]]
    [:span [:em [:strong {} name]]]]])

(defn h1 [{:keys [value]}]
  [:h1 {} (:name value)])

(defn d [{:keys [desserts] :as attr}]
  (into
    [:ol {}]
    (for [dessert @desserts]
      [:div {}
       [:button.stinky "stinky"]
       [dessert-item {:key (:id dessert)} dessert]])))

(defn b
  [attrs]
  [:div {}
   [:button.maker {:n 1} "Invent a new dessert"]
   [:button.maker {:n 100} "Invent 100 new desserts"]
   [:button.maker {:n 1000} "Invent 1000 new desserts"]
   [d {}]])

(defn dessertinator
  []
  ; (println (.-watches desserts))
  ; (println (count @desserts))
  (time
    (retort/brew
     {:d {:desserts desserts}
      :button.maker {:on-click #(make-many-desserts (:n %))}
      :button.stinky {:on-click #(println "stinky")}}
     [b {}])))

; =====

; (defn base
;   []
;   (println 'render-base!)
;   (reduce
;     (fn [acc design]
;       (retort/brew design acc))
;     (retort/brew
;       (retort/design-merge
;         arcanum.design/design
;         (module/design module-state)
;         (client/design state {:host "http://localhost" :port 1234}))
;       [:div {:style {:height "100vh" :width "100vw" :position :absolute :top 0 :left 0}}
;         (component/style)
;         [:style arcanum.css.animation/css]
;         [tabpage/base {}]])
;     (component/design)))

(defn base
  []
  [dessertinator])

; (defn h1
;   [{:keys [value] :as attrs}]
;   (println 'h1render!)
;   [:h1 attrs @value])
;
; (defn h2
;   [{:keys [value] :as attrs}]
;   (println 'h2render!)
;   [:h2 attrs value])
;
; (def state1 (reagent/atom 0))
; (def state2 (reagent/atom 0))

; (defn base
;   []
;   (retort/brew
;    {:data
;      {:.state1 {:value state1}
;       :.state2 (fn [] {:value @state2})}}
;    [:div {}
;     [h1 {:class "state1"}]
;     [h2 {:class "state2"}]
;     [:button {:on-click #(swap! state1 inc) :style {:width "150px" :height "150px"}} '+]
;     [:button {:on-click #(swap! state2 inc) :style {:width "150px" :height "150px"}} '+]]))


(defn ^:export render
  []
  (rd/render [base] (.getElementById js/document "app")))

(defn -main
  [& args]
  (app-routes route)
  (render))

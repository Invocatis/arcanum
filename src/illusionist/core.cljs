(ns illusionist.core
  (:require
    [sablono.core :as html :refer-macros [html]]
    [reagent.core :as reagent]
    [reagent.dom :as rd]
    [reagent.ratom :refer [ratom]]
    [retort.core :as retort]
    [retort.compiler :as compiler]
    [retort.compiler.react :refer [make-compiler]]
    [retort.compiler.reagent :as reagent-compiler]
    [arcanum.registrar :as registrar]
    [arcanum.component :as component]
    [arcanum.module :as module]
    [arcanum.css.animation]
    [arcanum.design]
    [illusionist.router :refer [app-routes]]
    [illusionist.view.tabpage :as tabpage]
    [illusionist.client :as client]
    [illusionist.data.design :as data]
    ["react-dom" :as rdom]))

(defonce route (reagent/atom {}))

; (defonce state (reagent/atom {}))

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

(def state (reagent/atom []))

; (add-watch state :asdf (fn [k r o n] (println n)))

(defn make-a-dessert [e]
  (swap! state conj {:id (random-uuid)
                     :name (rand-name)}))

(defn make-many-desserts [n]
  (dotimes [i n]
    (make-a-dessert nil)))

(defn color-for [x]
  (str "#" (.toString (bit-and (hash x) 0xFFFFFF) 16)))

(defn dessert-item [attr {:keys [id name]}]
  [:li.dessert {:id id}
   [:div {}
    [:svg {:width 50 :height 50}
     [:circle.retort
      {:r 20 :cx 25 :cy 25 :name name}]
     [:rect {:x 15 :y 15 :width 20 :height 20}]]
    [:span [:em [:strong {} name]]]]])

(defn h1 [{:keys [value]}]
  [:h1 {} (:name value)])

(defn desserts [{:keys [desserts]}]
  (into
    [:ol {}]
    (for [dessert (reverse desserts)]
      [dessert-item {:key (str (:id dessert))} dessert])))


(defn dessertinator
  []
  [:div.dessertinator {}
   [:button.maker {:n 1} "Invent a new dessert"]
   [:button.maker {:n 100} "Invent 100 new desserts"]
   [:button.maker {:n 1000} "Invent 1000 new desserts"]
   [desserts {:id "desserts"}]])


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

(defn something
  [hiccup]
  (cond
    (vector? hiccup)
    (let [[tag & more] hiccup]
      (if (fn? tag)
        (something (apply tag more))
        (into [tag] (map something more))))

    :else
    hiccup))

(def compiler (make-compiler))

(def design
  {:desserts {:desserts []}
   :.dessertinator>button.maker {:on-click (fn [_ {:keys [n]}] (fn [_] (make-many-desserts n)))}
   :circle {:fill (fn [_ {:keys [name]}] (color-for name))}
   :li {:on-click (fn [_ {:keys [id]}] (fn [_] (swap! state (partial remove #(= (:id %) id)))))}})

(defn ^:export render
  []
  ; (binding [reagent-compiler/context {:value [dessertinator] :siblings [[dessertinator]] :position 0}]))
  (let [context {:value [dessertinator] :siblings [[dessertinator]] :position 0}]
    (rd/render [(retort/precompile design state context dessertinator)]
               (.getElementById js/document "app"))))
    ; (rd/render [dessertinator] (.getElementById js/document "app") (reagent-compiler/create-compiler design state nil))))
  ; (rdom/render (compiler/-element compiler design state [dessertinator]) (.getElementById js/document "app")))

; (let [timeout (volatile! nil)]
;   (add-watch desserts :render
;              (fn [& _]
;                (when @timeout
;                  (js/clearTimeout @timeout))
;                (vreset! timeout (js/setTimeout render 5)))))

(defn -main
  [& args]
  (app-routes route)
  (render))

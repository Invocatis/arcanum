(ns arcanum.module.input.core
  (:require
    [arcanum.module :as module]))

(defn- pop*
  [v]
  (if-not (empty? v)
    (pop v)
    v))

(defn backspace?
  [any]
  (= 8 any))

(defn module
  [state]
  (let [key (gensym 'input)]
    {:key key
     :state {:default []
             :atom state}
     :listen {:keypress (fn [value]
                          (when (= (name key) (.getAttribute (.-activeElement js/document) "modulekey"))
                            (swap! state conj value)))}
     :api {:value (fn [] (apply str @state))
           :keypress (fn [value] (swap! state conj value))
           :set (fn [value] (reset! state (vec (clojure.string/split value #""))))}}))

(defn view
  [module & params]
  {:core (fn [] [:input {:modulekey (:key module)
                         :on-change #(module/call! module :set (.-value (.-target %)))
                         :value (module/call! module :value)}])})

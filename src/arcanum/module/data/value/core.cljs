(ns arcanum.module.data.value.core)

(defn module
  [state]
  {:state {:default nil
           :atom state}
   :api
   {:get (fn [] @state)
    :set (fn [v] (reset! state v))
    :update (fn [f & args ] (apply swap! state f args))}})

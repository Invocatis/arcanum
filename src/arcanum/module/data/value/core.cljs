(ns arcanum.module.data.value.core)

(defn module
  [state & [{:keys [value] :or {value nil}}]]
  (reset! state value)
  {:state {:default nil
           :atom state}
   :api
   {:get (fn [] @state)
    :set (fn [v] (reset! state v))
    :update (fn [f & args] (apply swap! state f args))}})

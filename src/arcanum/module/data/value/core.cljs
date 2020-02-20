(ns arcanum.module.data.value.core)

(defn module
  [state & [{:keys [default] :or {default nil}}]]
  (reset! state default)
  {:state {:default nil
           :atom state}
   :api
   {:get (fn [] @state)
    :set (fn [v] (reset! state v))
    :update (fn [f & args ] (apply swap! state f args))}})

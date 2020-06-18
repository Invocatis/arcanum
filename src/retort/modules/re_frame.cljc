(ns retort.modules.re-frame
  (:require
   [re-frame.core :as rf]))

(def design
  {:data
   #:re-frame{:subscribe
              (fn sub [{:keys [subscribe] :as attrs}]
                (if (vector? subscribe)
                  (reduce merge (map sub subscribe))
                  (let [{:keys [to as]} subscribe]
                    {as @(apply rf/subscribe to)})))}
   :transition
   #:re-frame{:dispatch
              (fn disp [{:keys [dispatch] :as attrs}]
                (if (vector? subscribe)
                  (reduce (partial merge-with comp) (map disp dispatch))
                  (let [{:keys [action on]} dispatch]
                    {on
                     (if (fn? action)
                       (fn [_ ev] (rf/dispatch (apply action [ev])))
                       #(rf/dispatch action))})))}})

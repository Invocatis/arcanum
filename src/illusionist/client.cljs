(ns illusionist.client
  (:require
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [clojure.edn :as edn])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti request
  (fn [method] method))

(defmethod request :get
  [_ point params]
  (http/get point {:query-params params}))

(defn req
  [state {:keys [host port]} as [method point params]]
  (go
    (let [chan (request method (str host ":" port point) params)
          val (<! chan)]
      (swap! state assoc-in [:call point method params] (edn/read-string (:body val))))))

(defn design
  [state connection]
  (let [mem-req (memoize req)]
    {:data
     {{:illusionist {:call [:get]}}
      (fn [{{[method point params] :call :keys [as]} :illusionist :as attrs}]
        (when-not (get-in @state [:call point method params])
          (mem-req state connection as [method point params]))
        {as (get-in @state [:call point method params])})}}))

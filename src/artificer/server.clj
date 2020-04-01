(ns artificer.server
  (:require
   [reitit.ring :as ring]
   [ring.server.standalone :as server]
   [artificer.model :as model]
   [artificer.model.menu :as menu]
   [artificer.database :as db]
   [cognitect.transit :as transit]))

(defn wrap-cors
  "Wrap the server response in a Control-Allow-Origin Header to
  allow connections from the web app."
  [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Access-Control-Allow-Origin"] "http://localhost:3000")
          (assoc-in [:headers "Access-Control-Allow-Headers"] "x-requested-with")
          (assoc-in [:headers "Access-Control-Allow-Credentials"] "true")
          (assoc-in [:headers "Access-Control-Allow-Methods"] "*")))))

(def router
  (ring/router
   [["/menu" {:get {:handler (fn [request]
                               (println (model/dispatch db/db-spec menu/model :get))
                               {:status 200
                                :body (pr-str (model/dispatch db/db-spec menu/model :get))})}}]]))

(def out (java.io.ByteArrayOutputStream. 4096))
(def writer (transit/writer out :json))

(defn start
  []
  (server/serve (wrap-cors (ring/ring-handler router)) {:port 1234}))

(def s)
(defn restart [] (.stop s) (use 'artificer.server :reload) (def s (start)))

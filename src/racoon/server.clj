(ns racoon.server
  (:require
   [reitit.core :as reitit]
   [reitit.ring :as ring]
   [ring.adapter.jetty :refer [run-jetty]]
   [hiccup.core :as hiccup]))

(defn ->page
  [& children]
  (hiccup/html
    [:html
      (into [:body] children)]))

(defn root
  [request]
  {:status 200
   :body (->page [:h1 "hello"])})

(def routes
  [["/" {:get {:handler root}}]])

(def app
  (ring/ring-handler
   (ring/router
    routes)))

(defn start
  [params]
  (run-jetty app params))

(defproject artificer "0.0.0"
  :description "FIXME: write description"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [motif "1.1.1-SNAPSHOT"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [honeysql "0.9.10"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [metosin/reitit "0.4.2"]
                 [metosin/reitit-ring "0.4.2"]
                 [com.cognitect/transit-clj "1.0.324"]
                 [mysql/mysql-connector-java "5.1.44"]
                 [ring-server "0.5.0"]
                 [org.clojure/core.async "1.0.567"]
                 [org.flatland/ordered "1.5.7"]]

  :main ^:skip-aot artificer.server)

(defproject racoon "0.0.0"
  :description "FIXME: write description"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [motif "1.1.1-SNAPSHOT"]
                 [honeysql "0.9.10"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [metosin/reitit-ring "0.4.2"]
                 [hiccup "1.0.5"]

                 [reagent "0.8.1"]
                 [retort "0.2.0-SNAPSHOT"]
                 [hiccup-icons "0.4.2"]
                 [garden "1.3.9"]]

  :plugins [[lein-cljsbuild "1.1.4"]]

  :main ^:skip-aot racoon.core
  :cljsbuild
   {:builds
    [{:id           "test"
      :source-paths ["src/racoon"]
      :compiler     {:main          motif.runner
                     :output-to     "target/doo/test.js"
                     :output-dir    "target/doo/out"
                     :target        :nodejs
                     :language-in   :ecmascript5
                     :optimizations :none}}]})

(defproject cljscale "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [quiescent "0.2.0-alpha1"]]
  :profiles
  {:dev {:plugins [[lein-cljsbuild "1.1.0"]
                   [lein-figwheel "0.3.7"]]
         :dependencies []
         :cljsbuild {:builds [{:source-paths ["src"]
                               :figwheel true
                               :compiler {:output-to "out/app.js"
                                          :output-dir "out"
                                          :optimizations :none
                                          :source-map true}}]}}})

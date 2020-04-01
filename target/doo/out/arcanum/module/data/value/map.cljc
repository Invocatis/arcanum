(ns arcanum.module.data.value.map
  (:require
   [arcanum.module :as module]))


(defn module
  [module f api]
  (update (merge module {:api {api #(f (apply module/call! module api %&))}})
    :extends conj module))

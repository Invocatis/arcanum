(ns artificer.model
  (:require
   [motif.core :refer [matches?]]
   [clojure.java.jdbc :as jdbc]
   [honeysql.format :as sql]))

(defn- dispatch-queries
  [database queries]
  (->> queries
       (map (fn [[as query]] [as (jdbc/query database (sql/format query))]))
       (into {})))

(defn- dispatch-changes!
  [database changes]
  (->> changes
       (map (fn [[as change]] [as (jdbc/execute! database (sql/format change))]))
       doall))

(defn select-spec
  [model method args]
  (second
   (first
    (filter
     (fn [[pattern _]]
       (matches?
        (with-meta pattern {:! true})
        args))
     (get-in model [:api method])))))

(defn dodispatch
  [database spec args]
  (let [{:keys [queries transform changes return]
         :or {transform identity return :query}
         :as model} spec
        queries (if (fn? queries) (apply queries args) queries)
        changes (if (fn? changes) (apply changes args) changes)
        query-results (dispatch-queries database queries)
        change-results (dispatch-changes! database changes)]
    (condp = return
      :query (apply transform [query-results])
      :changes (apply transform [change-results])
      nil)))

(defn dispatch
  [database model method & args]
  (if-let [spec (select-spec model method args)]
    (dodispatch database spec args)
    :no-api-found))

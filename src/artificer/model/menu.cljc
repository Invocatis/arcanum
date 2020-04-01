(ns artificer.model.menu
  (:require
   [clojure.string :as string]))

(defn -group-by
  [fs coll]
  (->> coll
   (map (apply juxt identity fs))
   (reduce (fn [ret [value & ks]] (update-in ret ks #(conj (or % []) value))) {})))

(def pages
  [:dump :beer :food :other :togo :catering])

(def model
  {:name :model
   :api
   {:get
    {[]
     {:queries
      {:items
       {:select [:id [:fk_category :category] :name [:tag :type]]
        :from [:item]
        :where [:= :active 1]}
       :category
       {:select [:*]
        :from [:category]}}
      :transform
      (fn [{:keys [items category]}]
        (let [category (into {} (map (fn [{:keys [id page] :as c}] [id (assoc c :page {:page (get pages page) :load_order page})]) category))]
          (dissoc
           (-group-by
            [(comp :page :category) (comp #(get category %) :id :category)]
            (map
             #(-> %
                  (update :category (fn [id] (get category id))))
             items))
           {:page :dump :load_order 0})))}}}})

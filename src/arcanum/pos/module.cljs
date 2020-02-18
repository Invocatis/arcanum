(ns arcanum.pos.module)

(def modules
  {:tabpage {:main {}}
   :toggle
    {:tabpage/item-list
     {:state {:default "close"}
      :toggler #(if (= % "close") "open" "close")}}})

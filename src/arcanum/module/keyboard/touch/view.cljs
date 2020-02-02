(ns arcanummodule.keyboard.touch.view)

(def -keys '[[q w e r t y u i o p ←]
             [a s d f g h j k l]
             [z x c v b n m ⏎]])

(defn keybtn
  [{:keys [value] :as params}]
  [:button.key (merge params {:on-mouse-down #(.preventDefault %)}) (str value)])

(defn main
  [& [{:keys [keymap] :as params}]]
  (into [:div.keyboard (merge params {:on-mouse-down #(.preventDefault %)})]
    (map
      (fn [row]
        (into [:div.keyrow {}] (map (fn [v] [keybtn {:value v}]) row)))
      -keys)))

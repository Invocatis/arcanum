(ns arcanum.module.calculator.view
  (:require
    [retort.core :as retort]))

(defn num-button
  [params n]
  [:button.simple.num.button {:value n}])

(defn numpad
  [params & [left right]]
  [:<>
    [num-button {} 1]
    [num-button {} 2]
    [num-button {} 3]
    [num-button {} 4]
    [num-button {} 5]
    [num-button {} 6]
    [num-button {} 7]
    [num-button {} 8]
    [num-button {} 9]
    left
    [num-button {} 0]
    right])


(defn operator-button
  [op]
  [:button.simple.operator.button {:value op}])

(defn operators
  [params]
  (into
    [:<> params]
    (map operator-button (map #(str \space % \space) '[+ - * /]))))

(defn window
  [params]
  [:input.window params])

(defn backspace
  [params]
  [:button.delete params "←"])

(defn equals
  [params]
  [:button.equals params "="])

(defn numpad-extras
  [params]
  [:div.numpad-extras params
    [:button.simple {} "."]
    [:button.blank {} "_"]
    [equals {}]])

(defn pad
  [params & children]
  (into [:div.pad params] children))

(defn main
  [params]
  [:div.calculator params
    [window {}]
    [pad {}
      [numpad {} [:button.simple {:value "."}] [equals {}]]
      [operators {}]
      [backspace {}]
      [:button.clear {} "cc"]]])

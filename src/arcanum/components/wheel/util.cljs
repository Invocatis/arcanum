(ns arcanumcomponents.wheel.util)

(def pi
  (.-PI js/Math))

(defn sin
  [ang]
  (.sin js/Math ang))

(defn cos
  [ang]
  (.cos js/Math ang))

(defn acos
  [ang]
  (.acos js/Math ang))

(defn asin
  [ang]
  (.asin js/Math ang))

(defn degrees->radians
  [angle]
  (/ (* (- angle 90) pi) 180))

(defn radians->degrees
  [angle]
  (* (/ 180 pi) angle))

(defn polar->cartesian
  [x y radius angle]
  [(+ x (* radius (cos (degrees->radians angle))))
   (+ y (* radius (sin (degrees->radians angle))))])

(defn sqrt
  [x]
  (.sqrt js/Math x))

(defn pow
  [x y]
  (.pow js/Math x y))

(defn squared
  [x]
  (pow x 2))

(defn distance
  [[x0 y0] [x1 y1]]
  (sqrt
    (+ (pow (- y1 y0) 2)
       (pow (- x1 x0) 2))))

(defn flip
  [n]
  (case n
    0 1
    1 0))

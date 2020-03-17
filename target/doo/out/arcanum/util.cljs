(ns arcanum.util)

(def state
  (atom {}))

(defn unique-timeout
  [key f time]
  (when-let [timeout (get @state key)]
    (js/clearTimeout timeout))
  (swap! state assoc key (js/setTimeout f time)))

(defn group-count
  [xs]
  (if (empty? xs)
    []
    (let [counts (reduce (fn [counts x] (update counts x #(inc (or % 0)))) {} xs)]
      (into [] (map (fn [x] [x (get counts x)]) (distinct xs))))))

(defn remove-one
  [pred coll]
  (concat
   (take-while (complement pred) coll)
   (rest (drop-while (complement pred) coll))))

(defn get-first
  [pred coll]
  (first (filter pred coll)))

(deftype SubAtom [base path meta]
  Object
  (equiv [this other]
    (-equiv this other))

  IAtom

  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [_] (get-in (-deref base) path))

  ISwap
  (-swap! [this f] (reset! base (update-in @base path f))
    (get-in (-deref base) path))
  (-swap! [this f a] (reset! base (update-in @base path #(f % a)))
    (get-in (-deref base) path))
  (-swap! [this f a b] (reset! base (update-in @base path #(f % a b)))
    (get-in (-deref base) path))
  (-swap! [this f a b xs] (reset! base (update-in @base path #(apply f (into [% a b] xs))))
    (get-in (-deref base) path))

  IReset
  (-reset! [this v] (-swap! base assoc-in path v))

  IMeta
  (-meta [_] meta)

  IWatchable
  (-notify-watches [this oldval newval])

  (-add-watch [this key f]
    (-add-watch base [(hash this) key]
      (fn [k r o n]
        (let [so (get-in o path), sn (get-in n path)]
          (when-not (= so sn)
            (f k this so sn)))))
    this)

  (-remove-watch [this key]
    (-remove-watch base [(hash this) key])
    this)

  IHash
  (-hash [this] (-hash (get base path))))


(defn subatom
  [base path]
  (->SubAtom base path nil))

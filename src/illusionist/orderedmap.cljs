; (ns illusionist.orderedmap
;   (:import [goog.string StringBuffer]))
;
; (declare PersistentOrderedMap)
;
; (deftype TransientOrderedMap [^:mutable ^boolean edit
;                               ^:mutable root
;                               ^:mutable count
;                               ^:mutable order
;                               ^:mutable ^boolean has-nil?
;                               ^:mutable nil-val]
;   Object
;   (conj! [tcoll o]
;     (if edit
;       (cond
;         (map-entry? o)
;         (.assoc! tcoll (key o) (val o))
;
;         (vector? o)
;         (.assoc! tcoll (o 0) (o 1))
;
;         :else
;         (loop [es (seq o) tcoll tcoll]
;           (if-let [e (first es)]
;             (recur (next es)
;                    (.assoc! tcoll (key e) (val e)))
;             tcoll)))
;       (throw (js/Error. "conj! after persistent"))))
;
;   (assoc! [tcoll k v]
;     (if edit
;       (if (nil? k)
;         (do (if (identical? nil-val v)
;               nil
;               (do
;                 (set! order (conj (filterv (complement nil?) order) nil))
;                 (set! nil-val v)))
;             (if has-nil?
;               nil
;               (do (set! count (inc count))
;                   (set! has-nil? true)))
;             tcoll)
;         (let [added-leaf? (Box. false)
;               node        (-> (if (nil? root)
;                                 (.-EMPTY BitmapIndexedNode)
;                                 root)
;                               (.inode-assoc! edit 0 (hash k) k v added-leaf?))]
;           ; (if (identical? node root)
;           ;   nil
;             (do (set! order (conj order k))
;                 (set! root node))
;           (if ^boolean (.-val added-leaf?)
;             (set! count (inc count)))
;           tcoll))
;       (throw (js/Error. "assoc! after persistent!"))))
;
;   (without! [tcoll k]
;     (if edit
;       (if (nil? k)
;         (if has-nil?
;           (do (set! has-nil? false)
;               (set! nil-val nil)
;               (set! count (dec count))
;               (set! order (filterv (complement nil?) order))
;               tcoll)
;           tcoll)
;         (if (nil? root)
;           tcoll
;           (let [removed-leaf? (Box. false)
;                 node (.inode-without! root edit 0 (hash k) k removed-leaf?)]
;             (if (identical? node root)
;               nil
;               (do (set! root node)
;                   (set! order (filterv (complement (partial = k)) order))))
;             (if ^boolean (.-val removed-leaf?)
;               (set! count (dec count)))
;             tcoll)))
;       (throw (js/Error. "dissoc! after persistent!"))))
;
;   (persistent! [tcoll]
;     (if edit
;       (do (set! edit nil)
;           (PersistentOrderedMap. nil count root order has-nil? nil-val nil))
;       (throw (js/Error. "persistent! called twice"))))
;
;   ICounted
;   (-count [coll]
;     (if edit
;       count
;       (throw (js/Error. "count after persistent!"))))
;
;   ILookup
;   (-lookup [tcoll k]
;     (if (nil? k)
;       (if has-nil?
;         nil-val)
;       (if (nil? root)
;         nil
;         (.inode-lookup root 0 (hash k) k))))
;
;   (-lookup [tcoll k not-found]
;     (if (nil? k)
;       (if has-nil?
;         nil-val
;         not-found)
;       (if (nil? root)
;         not-found
;         (.inode-lookup root 0 (hash k) k not-found))))
;
;   ITransientCollection
;   (-conj! [tcoll val] (.conj! tcoll val))
;
;   (-persistent! [tcoll] (.persistent! tcoll))
;
;   ITransientAssociative
;   (-assoc! [tcoll key val] (.assoc! tcoll key val))
;
;   ITransientMap
;   (-dissoc! [tcoll key] (.without! tcoll key))
;
;   IFn
;   (-invoke [tcoll key]
;     (-lookup tcoll key))
;   (-invoke [tcoll key not-found]
;     (-lookup tcoll key not-found)))
;
;
; (deftype PersistentOrderedMap [meta cnt root order ^boolean has-nil? nil-val ^:mutable __hash]
;   Object
;   (toString [coll]
;     (let [sb (StringBuffer. "{")]
;       (loop [sb sb
;              more order]
;         (if more
;           (recur (do (. sb (append (str (first more))))
;                      (. sb (append " "))
;                      (. sb (append (-lookup coll (first more))))
;                      (when-not (empty? (rest more)) (. sb (append ", ")))
;                      sb)
;             (next more))
;           (do (. sb (append "}")) (.toString sb))))))
;
;   (equiv [this other]
;     (-equiv this other))
;
;   ICloneable
;   (-clone [_] (PersistentOrderedMap. meta cnt root order has-nil? nil-val __hash))
;
;   IIterable
;   (-iterator [coll]
;     (let [root-iter (if ^boolean root (-iterator root) (nil-iter))]
;       (if has-nil?
;         (HashMapIter. nil-val root-iter false)
;         root-iter)))
;
;   IWithMeta
;   (-with-meta [coll new-meta]
;     (if (identical? new-meta meta)
;       coll
;       (PersistentOrderedMap. new-meta cnt root order has-nil? nil-val __hash)))
;
;   IMeta
;   (-meta [coll] meta)
;
;   ICollection
;   (-conj [coll entry]
;     (if (vector? entry)
;       (-assoc coll (-nth entry 0) (-nth entry 1))
;       (loop [ret coll es (seq entry)]
;         (if (nil? es)
;           ret
;           (let [e (first es)]
;             (if (vector? e)
;               (recur (-assoc ret (-nth e 0) (-nth e 1))
;                      (next es))
;               (throw (js/Error. "conj on a map takes map entries or seqables of map entries"))))))))
;
;   IEmptyableCollection
;   (-empty [coll] (-with-meta (.-EMPTY PersistentOrderedMap) meta))
;
;   IEquiv
;   (-equiv [coll other] (equiv-map coll other))
;
;   IHash
;   (-hash [coll] (caching-hash coll hash-unordered-coll __hash))
;
;   ISeqable
;   (-seq [coll]
;     (when (pos? cnt)
;       (let [s (if-not (nil? root) (map (fn [k] (MapEntry. k (-lookup coll k) nil)) order))]
;         (if has-nil?
;           (cons (MapEntry. nil nil-val nil) s)
;           s))))
;
;   ICounted
;   (-count [coll] cnt)
;
;   ILookup
;   (-lookup [coll k]
;     (-lookup coll k nil))
;
;   (-lookup [coll k not-found]
;     (cond (nil? k)    (if has-nil?
;                         nil-val
;                         not-found)
;           (nil? root) not-found
;           :else       (.inode-lookup root 0 (hash k) k not-found)))
;
;   IAssociative
;   (-assoc [coll k v]
;     (if (nil? k)
;       (if (and has-nil? (identical? v nil-val))
;         coll
;         (PersistentOrderedMap. meta (if has-nil? cnt (inc cnt)) root (conj (filterv (complement nil?) order) nil) true v nil))
;       (let [added-leaf? (Box. false)
;             new-root    (-> (if (nil? root)
;                               (.-EMPTY BitmapIndexedNode)
;                               root)
;                             (.inode-assoc 0 (hash k) k v added-leaf?))]
;         (if (identical? new-root root)
;           coll
;           (let [order (if (.-val added-leaf?) (conj (filterv (complement (partial = k)) order) k) order)]
;            (PersistentOrderedMap. meta (if ^boolean (.-val added-leaf?) (inc cnt) cnt) new-root order has-nil? nil-val nil))))))
;
;   (-contains-key? [coll k]
;     (cond (nil? k)    has-nil?
;           (nil? root) false
;           :else       (not (identical? (.inode-lookup root 0 (hash k) k lookup-sentinel)
;                                        lookup-sentinel))))
;
;   IFind
;   (-find [coll k]
;     (cond
;       (nil? k) (when has-nil? (MapEntry. nil nil-val nil))
;       (nil? root) nil
;       :else (.inode-find root 0 (hash k) k nil)))
;
;   IMap
;   (-dissoc [coll k]
;     (cond (nil? k)    (if has-nil?
;                         (PersistentOrderedMap. meta (dec cnt) root (filterv (complement nil?) order) false nil nil)
;                         coll)
;           (nil? root) coll
;           :else
;           (let [new-root (.inode-without root 0 (hash k) k)]
;             (if (identical? new-root root)
;               coll
;               (PersistentOrderedMap. meta (dec cnt) new-root (filterv (complement (partial = k)) order) has-nil? nil-val nil)))))
;
;   IKVReduce
;   (-kv-reduce [coll f init]
;     (let [init (if has-nil? (f init nil nil-val) init)]
;       (cond
;         (reduced? init)          @init
;         (not (nil? root)) (unreduced (.kv-reduce root f init))
;         :else                    init)))
;
;   IFn
;   (-invoke [coll k]
;     (-lookup coll k))
;
;   (-invoke [coll k not-found]
;     (-lookup coll k not-found))
;
;   IEditableCollection
;   (-as-transient [coll]
;     (TransientOrderedMap. (js-obj) root cnt order has-nil? nil-val)))
;
; (def ^:private empty-ordered-map
;   (mix-collection-hash 2 0))
;
; (set! (.-EMPTY PersistentOrderedMap) (PersistentOrderedMap. nil 0 nil [] false nil empty-ordered-map))
;
; (defn ordered-map
;   "keyval => key val
;   Returns a new hash map with supplied mappings."
;   [& keyvals]
;   (loop [in (seq keyvals), out (transient (.-EMPTY PersistentOrderedMap))]
;     (if in
;       (recur (nnext in) (assoc! out (first in) (second in)))
;       (persistent! out))))

// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('motif.core');
goog.require('cljs.core');
motif.core._ = (function motif$core$_(any){

return true;
});
motif.core.and_pattern = (function motif$core$and_pattern(p1,p2){
return (function (target){
var and__4120__auto__ = p1.call(null,target);
if(cljs.core.truth_(and__4120__auto__)){
return p2.call(null,target);
} else {
return and__4120__auto__;
}
});
});
motif.core.strict_QMARK_ = (function motif$core$strict_QMARK_(pattern){
return new cljs.core.Keyword(null,"!","!",-311249637).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern));
});
motif.core.compile_meta = (function motif$core$compile_meta(pattern,accessor){
return motif.core.and_pattern.call(null,motif.core.compile_pattern.call(null,cljs.core.with_meta.call(null,pattern,cljs.core.dissoc.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"meta","meta",1499536964))),accessor),motif.core.compile_pattern.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)),cljs.core.comp.call(null,cljs.core.meta,accessor)));
});
motif.core.compile_star = (function motif$core$compile_star(pattern,accessor){
var map__3575 = cljs.core.meta.call(null,pattern);
var map__3575__$1 = (((((!((map__3575 == null))))?(((((map__3575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3575):map__3575);
var star_value = cljs.core.get.call(null,map__3575__$1,new cljs.core.Keyword(null,"*","*",-1294732318));
var meta = ((((typeof star_value === 'number') && ((star_value > (0)))))?cljs.core.update.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.dec):cljs.core.dissoc.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"*","*",-1294732318)));
var matcher = motif.core.compile_pattern.call(null,cljs.core.with_meta.call(null,pattern,meta));
return ((function (map__3575,map__3575__$1,star_value,meta,matcher){
return (function (target){
return cljs.core.every_QMARK_.call(null,matcher,accessor.call(null,target));
});
;})(map__3575,map__3575__$1,star_value,meta,matcher))
});
motif.core.compile_question = (function motif$core$compile_question(pattern,accessor){
var map__3578 = cljs.core.meta.call(null,pattern);
var map__3578__$1 = (((((!((map__3578 == null))))?(((((map__3578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3578):map__3578);
var _QMARK_value = cljs.core.get.call(null,map__3578__$1,new cljs.core.Keyword(null,"?","?",-1703165233));
var _QMARK_value__$1 = ((cljs.core.boolean_QMARK_.call(null,_QMARK_value))?(1):_QMARK_value);
var _QMARK_value__$2 = ((typeof _QMARK_value__$1 === 'number')?((function (map__3578,map__3578__$1,_QMARK_value,_QMARK_value__$1){
return (function (p1__3577_SHARP_){
return (p1__3577_SHARP_ >= _QMARK_value__$1);
});})(map__3578,map__3578__$1,_QMARK_value,_QMARK_value__$1))
:_QMARK_value__$1);
var meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"?","?",-1703165233));
var matcher = motif.core.compile_pattern.call(null,cljs.core.with_meta.call(null,pattern,meta),accessor);
return ((function (map__3578,map__3578__$1,_QMARK_value,_QMARK_value__$1,_QMARK_value__$2,meta,matcher){
return (function (target){
return cljs.core.apply.call(null,_QMARK_value__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,cljs.core.filter.call(null,matcher,accessor.call(null,target)))], null));
});
;})(map__3578,map__3578__$1,_QMARK_value,_QMARK_value__$1,_QMARK_value__$2,meta,matcher))
});
motif.core.compile_strict_question = (function motif$core$compile_strict_question(pattern,accessor){
var map__3581 = cljs.core.meta.call(null,pattern);
var map__3581__$1 = (((((!((map__3581 == null))))?(((((map__3581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3581):map__3581);
var _QMARK_value = cljs.core.get.call(null,map__3581__$1,new cljs.core.Keyword(null,"!?","!?",568932974));
var _QMARK_value__$1 = ((cljs.core.boolean_QMARK_.call(null,_QMARK_value))?(1):_QMARK_value);
var meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"!?","!?",568932974));
var matcher = motif.core.compile_pattern.call(null,cljs.core.with_meta.call(null,pattern,meta),accessor);
return ((function (map__3581,map__3581__$1,_QMARK_value,_QMARK_value__$1,meta,matcher){
return (function (target){
return cljs.core.apply.call(null,((function (map__3581,map__3581__$1,_QMARK_value,_QMARK_value__$1,meta,matcher){
return (function (p1__3580_SHARP_){
return cljs.core._EQ_.call(null,p1__3580_SHARP_,_QMARK_value__$1);
});})(map__3581,map__3581__$1,_QMARK_value,_QMARK_value__$1,meta,matcher))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,cljs.core.filter.call(null,matcher,accessor.call(null,target)))], null));
});
;})(map__3581,map__3581__$1,_QMARK_value,_QMARK_value__$1,meta,matcher))
});
motif.core.compile_use = (function motif$core$compile_use(pattern,accessor){
return (function (target){
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)).call(null,pattern,accessor.call(null,target));
});
});
motif.core.compile_element = (function motif$core$compile_element(pattern,accessor){
if(cljs.core.fn_QMARK_.call(null,pattern)){
return (function (p1__3583_SHARP_){
return cljs.core.boolean$.call(null,pattern.call(null,accessor.call(null,p1__3583_SHARP_)));
});
} else {
return (function (p1__3584_SHARP_){
return cljs.core._EQ_.call(null,accessor.call(null,p1__3584_SHARP_),pattern);
});

}
});
motif.core.compile_simple_map = (function motif$core$compile_simple_map(pattern,accessor){
var getter = new cljs.core.Keyword(null,"getter","getter",84844855).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern));
return cljs.core.reduce.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"|","|",-352411576).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))?cljs.core.some_fn:cljs.core.every_pred),cljs.core.map.call(null,((function (getter){
return (function (p__3587){
var vec__3588 = p__3587;
var k = cljs.core.nth.call(null,vec__3588,(0),null);
var v = cljs.core.nth.call(null,vec__3588,(1),null);
var acc = (function (){var or__4131__auto__ = (cljs.core.truth_(getter)?((function (vec__3588,k,v,getter){
return (function (p1__3585_SHARP_){
return getter.call(null,p1__3585_SHARP_,k);
});})(vec__3588,k,v,getter))
:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.ifn_QMARK_.call(null,k)){
return k;
} else {
return ((function (or__4131__auto__,vec__3588,k,v,getter){
return (function (p1__3586_SHARP_){
return cljs.core.get.call(null,p1__3586_SHARP_,k);
});
;})(or__4131__auto__,vec__3588,k,v,getter))
}
}
})();
return motif.core.compile_pattern.call(null,v,cljs.core.comp.call(null,acc,accessor));
});})(getter))
,pattern));
});
motif.core.compile_map = (function motif$core$compile_map(pattern,accessor){
if(cljs.core.empty_QMARK_.call(null,pattern)){
if(cljs.core.truth_(motif.core.strict_QMARK_.call(null,pattern))){
return (function (target){
return cljs.core.empty_QMARK_.call(null,accessor.call(null,target));
});
} else {
return (function (target){
return true;
});
}
} else {
if(cljs.core.truth_(motif.core.strict_QMARK_.call(null,pattern))){
return motif.core.and_pattern.call(null,motif.core.compile_simple_map.call(null,pattern,accessor),(function (target){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,pattern),cljs.core.keys.call(null,accessor.call(null,target)));
}));
} else {
return motif.core.compile_simple_map.call(null,pattern,accessor);
}
}
});
motif.core.compile_seq = (function motif$core$compile_seq(pattern,accessor){
return (function (value){
var n = cljs.core.count.call(null,accessor.call(null,value));
return cljs.core.every_QMARK_.call(null,cljs.core.boolean$,cljs.core.map.call(null,((function (n){
return (function (p1__3591_SHARP_){
return cljs.core.apply.call(null,p1__3591_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
});})(n))
,cljs.core.take.call(null,n,cljs.core.map_indexed.call(null,((function (n){
return (function (i,p){
return motif.core.compile_pattern.call(null,p,cljs.core.comp.call(null,((function (n){
return (function (p1__3592_SHARP_){
return cljs.core.nth.call(null,p1__3592_SHARP_,i,null);
});})(n))
,accessor));
});})(n))
,pattern))));
});
});
motif.core.compile_set = (function motif$core$compile_set(pattern,accessor){
var subpatterns = cljs.core.map.call(null,(function (p1__3593_SHARP_){
return motif.core.compile_pattern.call(null,p1__3593_SHARP_,accessor);
}),pattern);
if(cljs.core.truth_(motif.core.strict_QMARK_.call(null,pattern))){
return ((function (subpatterns){
return (function (target){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (subpatterns){
return (function (sp){
return sp.call(null,target);
});})(subpatterns))
,subpatterns))));
});
;})(subpatterns))
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return ((function (subpatterns){
return (function (target){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,((function (subpatterns){
return (function (sp){
return sp.call(null,target);
});})(subpatterns))
,subpatterns));
});
;})(subpatterns))
} else {
return ((function (subpatterns){
return (function (target){
return (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (subpatterns){
return (function (sp){
return sp.call(null,target);
});})(subpatterns))
,subpatterns)))));
});
;})(subpatterns))

}
}
});
motif.core.compile_simple_vector = (function motif$core$compile_simple_vector(pattern,accessor){
var subpatterns = cljs.core.map_indexed.call(null,(function (i,p){
return motif.core.compile_pattern.call(null,p,cljs.core.comp.call(null,(function (p1__3594_SHARP_){
return cljs.core.nth.call(null,p1__3594_SHARP_,i);
}),accessor));
}),pattern);
return ((function (subpatterns){
return (function (target){
return (((cljs.core.count.call(null,pattern) <= cljs.core.count.call(null,accessor.call(null,target)))) && (cljs.core.every_QMARK_.call(null,((function (subpatterns){
return (function (p1__3595_SHARP_){
return p1__3595_SHARP_.call(null,target);
});})(subpatterns))
,subpatterns)));
});
;})(subpatterns))
});
motif.core.compile_vector = (function motif$core$compile_vector(pattern,accessor){
if(cljs.core.truth_(motif.core.strict_QMARK_.call(null,pattern))){
return motif.core.and_pattern.call(null,(function (target){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,pattern),cljs.core.count.call(null,accessor.call(null,target)));
}),motif.core.compile_simple_vector.call(null,pattern,accessor));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"|","|",-352411576).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"&","&",509580121).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern));
}
})())){
return motif.core.compile_set.call(null,pattern,accessor);
} else {
return motif.core.compile_simple_vector.call(null,pattern,accessor);

}
}
});
motif.core.compile_regex = (function motif$core$compile_regex(pattern,accessor){
return (function (value){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,pattern,cljs.core.str.cljs$core$IFn$_invoke$arity$1(accessor.call(null,value))));
});
});
motif.core.regex_type = cljs.core.type.call(null,(new RegExp("")));
motif.core.regex_QMARK_ = (function motif$core$regex_QMARK_(any){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,any),motif.core.regex_type);
});
motif.core.compile_pattern = (function motif$core$compile_pattern(var_args){
var G__3597 = arguments.length;
switch (G__3597) {
case 1:
return motif.core.compile_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return motif.core.compile_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

motif.core.compile_pattern.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return motif.core.compile_pattern.call(null,pattern,cljs.core.identity);
});

motif.core.compile_pattern.cljs$core$IFn$_invoke$arity$2 = (function (pattern,accessor){
if(cljs.core.truth_(new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return motif.core.compile_star.call(null,pattern,accessor);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"?","?",-1703165233).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return motif.core.compile_question.call(null,pattern,accessor);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return motif.core.compile_meta.call(null,pattern,accessor);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"=","=",1152933628).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return motif.core.compile_use.call(null,cljs.core.with_meta.call(null,pattern,cljs.core.assoc.call(null,cljs.core.meta.call(null,pattern),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core._EQ_)),accessor);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,pattern)))){
return motif.core.compile_use.call(null,pattern,accessor);
} else {
if(cljs.core.map_QMARK_.call(null,pattern)){
return motif.core.compile_map.call(null,pattern,accessor);
} else {
if(cljs.core.set_QMARK_.call(null,pattern)){
return motif.core.compile_set.call(null,pattern,accessor);
} else {
if(cljs.core.vector_QMARK_.call(null,pattern)){
return motif.core.compile_vector.call(null,pattern,accessor);
} else {
if(cljs.core.seq_QMARK_.call(null,pattern)){
return motif.core.compile_seq.call(null,pattern,accessor);
} else {
if(motif.core.regex_QMARK_.call(null,pattern)){
return motif.core.compile_regex.call(null,pattern,accessor);
} else {
return motif.core.compile_element.call(null,pattern,accessor);

}
}
}
}
}
}
}
}
}
}
});

motif.core.compile_pattern.cljs$lang$maxFixedArity = 2;

/**
 * Given a pattern, and an expression, recursively determines
 *   if the expression matches the pattern.
 * 
 *   For f, a function, and x, any expression:
 * 
 *  (match f e) => (f e)
 * 
 *   For vector patterns, each ordinal spot is checked:
 * 
 *  (matches? [p0 p1 p2] [t0 t1 t2]) =>
 *      [t0 t1 t2 ...]
 *        ↑  ↑  ↑      matches?
 *      [p0 p1 p2 ...]
 * 
 *  Vectors ensure their targets are at least as long as they are.
 *  Strict vectors must have identical lengths.
 * 
 *   For lazy sequence patterns, like vectors, each oridnal spot is checked:
 * 
 *  (matches? (p0 p1 p2) (t0 t1 t2)) =>
 *      (t0 t1 t2 ...)
 *        ↑  ↑  ↑      matches?
 *      (p0 p1 p2 ...)
 * 
 *  Lazy seqs targets can be shorter, or longer, than they are.
 *  Infinite sequences can be used, though if they are matched against
 *  inifinte targets, a infinte loop will happen
 * 
 *   For m, a map with keyset {k1,k2,...,kn}, and n, a map:
 * 
 *  (match m n) => (and (match (get m k1) (get n k1))
 *                      (match (get m k2) (get n k2))
 *                      ...
 * 
 *  If the key is an ifn, it will be applied to the target instead.
 *  Strict maps require that the pattern contains all keys of the target.
 * 
 *   Set patterns are disjunctive, and only require one of their elements to match.
 * 
 *  (match m n) => (or (match m0 n)
 *                     (match m1 n)
 *                     ...
 * 
 *  Strict set patterns require exactly one element to match.
 * 
 *   For any pattern not described above, equality is checked.
 * 
 *  (match 1 2) => (= 1 2)
 * 
 *   Given the expression passed matches the given pattern,
 *   true will be returned. Otherwise, false will be returned.
 * 
 * 
 *   Meta tag modifers can enhance and change how each pattern functions.
 * 
 *  ^:!
 *    Strict modifier is defined for each pattern type
 *  ^:=
 *    Equality modifier forces equality to be used, rather than matches?
 *  {^:use f}
 *    Use mofider forces f to be used as predicate, rather than matches?
 *  ^:*
 *    Star modifier maps pattern over target, expecting all to match
 *  {^:meta m}
 *    Meta modifier matches m to the meta of the target
 *   
 */
motif.core.matches_QMARK_ = (function motif$core$matches_QMARK_(var_args){
var G__3600 = arguments.length;
switch (G__3600) {
case 1:
return motif.core.matches_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return motif.core.matches_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

motif.core.matches_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return (function (target){
try{return cljs.core.apply.call(null,motif.core.compile_pattern.call(null,pattern),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null));
}catch (e3601){var _ = e3601;
return false;
}});
});

motif.core.matches_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pattern,expr){
try{return cljs.core.apply.call(null,motif.core.compile_pattern.call(null,pattern),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null));
}catch (e3602){var _ = e3602;
return false;
}});

motif.core.matches_QMARK_.cljs$lang$maxFixedArity = 2;

var ret__4776__auto___3612 = (function (){
/**
 * Takes a subject expression, and a set of clauses.
 *   Each clause should be of the form:
 * 
 *  pattern resultant
 * 
 *   For each clause, (match pattern expr) is performed. If it
 *   returns logical true, the clause is a match and the resultant
 *   is returned. A single default expression can follow the clauses
 *   and its value will be returned if no clause matches. If no
 *   default expression is provided, and no clause matches, nil will
 *   be returned
 */
motif.core.match = (function motif$core$match(var_args){
var G__3611 = arguments.length;
switch (G__3611) {
case 3:
return motif.core.match.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return motif.core.match.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3614 = arguments.length;
var i__4731__auto___3615 = (0);
while(true){
if((i__4731__auto___3615 < len__4730__auto___3614)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3615]));

var G__3616 = (i__4731__auto___3615 + (1));
i__4731__auto___3615 = G__3616;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return motif.core.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

motif.core.match.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,expr){
return null;
});

motif.core.match.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,expr,default$){
return default$;
});

motif.core.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,pattern,result,statements){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("motif.core","matches?","motif.core/matches?",1270549688,null),null,(1),null)),(new cljs.core.List(null,pattern,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,result,null,(1),null)),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("motif.core","match","motif.core/match",-318998429,null),cljs.core.cons.call(null,expr,statements)),null,(1),null)))));
});

/** @this {Function} */
motif.core.match.cljs$lang$applyTo = (function (seq3605){
var G__3606 = cljs.core.first.call(null,seq3605);
var seq3605__$1 = cljs.core.next.call(null,seq3605);
var G__3607 = cljs.core.first.call(null,seq3605__$1);
var seq3605__$2 = cljs.core.next.call(null,seq3605__$1);
var G__3608 = cljs.core.first.call(null,seq3605__$2);
var seq3605__$3 = cljs.core.next.call(null,seq3605__$2);
var G__3609 = cljs.core.first.call(null,seq3605__$3);
var seq3605__$4 = cljs.core.next.call(null,seq3605__$3);
var G__3610 = cljs.core.first.call(null,seq3605__$4);
var seq3605__$5 = cljs.core.next.call(null,seq3605__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3606,G__3607,G__3608,G__3609,G__3610,seq3605__$5);
});

motif.core.match.cljs$lang$maxFixedArity = (5);

return null;
})()
;
motif.core.match.cljs$lang$macro = true;


//# sourceMappingURL=core.js.map

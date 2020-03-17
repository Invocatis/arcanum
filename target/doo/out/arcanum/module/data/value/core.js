// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.data.value.core');
goog.require('cljs.core');
arcanum.module.data.value.core.module = (function arcanum$module$data$value$core$module(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6457 = arguments.length;
var i__4731__auto___6458 = (0);
while(true){
if((i__4731__auto___6458 < len__4730__auto___6457)){
args__4736__auto__.push((arguments[i__4731__auto___6458]));

var G__6459 = (i__4731__auto___6458 + (1));
i__4731__auto___6458 = G__6459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.data.value.core.module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.data.value.core.module.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__6451){
var vec__6452 = p__6451;
var map__6455 = cljs.core.nth.call(null,vec__6452,(0),null);
var map__6455__$1 = (((((!((map__6455 == null))))?(((((map__6455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6455):map__6455);
var value = cljs.core.get.call(null,map__6455__$1,new cljs.core.Keyword(null,"value","value",305978217),null);
cljs.core.reset_BANG_.call(null,state,value);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"atom","atom",-397043653),state], null),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get","get",1683182755),((function (vec__6452,map__6455,map__6455__$1,value){
return (function (){
return cljs.core.deref.call(null,state);
});})(vec__6452,map__6455,map__6455__$1,value))
,new cljs.core.Keyword(null,"set","set",304602554),((function (vec__6452,map__6455,map__6455__$1,value){
return (function (v){
return cljs.core.reset_BANG_.call(null,state,v);
});})(vec__6452,map__6455,map__6455__$1,value))
,new cljs.core.Keyword(null,"update","update",1045576396),((function (vec__6452,map__6455,map__6455__$1,value){
return (function() { 
var G__6460__delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,state,f,args);
};
var G__6460 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__6461__i = 0, G__6461__a = new Array(arguments.length -  1);
while (G__6461__i < G__6461__a.length) {G__6461__a[G__6461__i] = arguments[G__6461__i + 1]; ++G__6461__i;}
  args = new cljs.core.IndexedSeq(G__6461__a,0,null);
} 
return G__6460__delegate.call(this,f,args);};
G__6460.cljs$lang$maxFixedArity = 1;
G__6460.cljs$lang$applyTo = (function (arglist__6462){
var f = cljs.core.first(arglist__6462);
var args = cljs.core.rest(arglist__6462);
return G__6460__delegate(f,args);
});
G__6460.cljs$core$IFn$_invoke$arity$variadic = G__6460__delegate;
return G__6460;
})()
;})(vec__6452,map__6455,map__6455__$1,value))
], null)], null);
});

arcanum.module.data.value.core.module.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.data.value.core.module.cljs$lang$applyTo = (function (seq6449){
var G__6450 = cljs.core.first.call(null,seq6449);
var seq6449__$1 = cljs.core.next.call(null,seq6449);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6450,seq6449__$1);
});


//# sourceMappingURL=core.js.map

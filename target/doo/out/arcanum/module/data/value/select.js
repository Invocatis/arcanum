// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.data.value.select');
goog.require('cljs.core');
goog.require('arcanum.module.data.value.core');
arcanum.module.data.value.select.module = (function arcanum$module$data$value$select$module(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6481 = arguments.length;
var i__4731__auto___6482 = (0);
while(true){
if((i__4731__auto___6482 < len__4730__auto___6481)){
args__4736__auto__.push((arguments[i__4731__auto___6482]));

var G__6483 = (i__4731__auto___6482 + (1));
i__4731__auto___6482 = G__6483;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.data.value.select.module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.data.value.select.module.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__6472){
var vec__6473 = p__6472;
var map__6476 = cljs.core.nth.call(null,vec__6473,(0),null);
var map__6476__$1 = (((((!((map__6476 == null))))?(((((map__6476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6476):map__6476);
var selections = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var type = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"single","single",1551466437));
var value = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"value","value",305978217));
var allow_deselect = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"allow-deselect","allow-deselect",57133933),true);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"atom","atom",-397043653),state], null)], null),(function (){var pred__6478 = cljs.core._EQ_;
var expr__6479 = type;
if(cljs.core.truth_(pred__6478.call(null,new cljs.core.Keyword(null,"single","single",1551466437),expr__6479))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extends","extends",-954903259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arcanum.module.data.value.core.module.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null))], null),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (p1__6465_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,state),p1__6465_SHARP_);
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
,new cljs.core.Keyword(null,"select","select",1147833503),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (p1__6466_SHARP_){
return cljs.core.reset_BANG_.call(null,state,p1__6466_SHARP_);
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
,new cljs.core.Keyword(null,"unselect","unselect",-1124322706),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (){
if(cljs.core.truth_(allow_deselect)){


return null;
} else {
return null;
}
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
], null)], null);
} else {
if(cljs.core.truth_(pred__6478.call(null,new cljs.core.Keyword(null,"multi","multi",-190293005),expr__6479))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extends","extends",-954903259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arcanum.module.data.value.core.module.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()], null))], null),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (p1__6467_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,state),p1__6467_SHARP_);
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
,new cljs.core.Keyword(null,"select","select",1147833503),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (p1__6468_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.conj,p1__6468_SHARP_);
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
,new cljs.core.Keyword(null,"unselect","unselect",-1124322706),((function (pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect){
return (function (p1__6469_SHARP_){
if(cljs.core.truth_(allow_deselect)){



return p1__6469_SHARP_;
} else {
return null;
}
});})(pred__6478,expr__6479,vec__6473,map__6476,map__6476__$1,selections,type,value,allow_deselect))
], null)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6479)].join('')));
}
}
})());
});

arcanum.module.data.value.select.module.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.data.value.select.module.cljs$lang$applyTo = (function (seq6470){
var G__6471 = cljs.core.first.call(null,seq6470);
var seq6470__$1 = cljs.core.next.call(null,seq6470);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6471,seq6470__$1);
});


//# sourceMappingURL=select.js.map

// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.input.core');
goog.require('cljs.core');
goog.require('arcanum.module');
arcanum.module.input.core.pop_STAR_ = (function arcanum$module$input$core$pop_STAR_(v){
if((!(cljs.core.empty_QMARK_.call(null,v)))){
return cljs.core.pop.call(null,v);
} else {
return v;
}
});
arcanum.module.input.core.backspace_QMARK_ = (function arcanum$module$input$core$backspace_QMARK_(any){
return cljs.core._EQ_.call(null,(8),any);
});
arcanum.module.input.core.module = (function arcanum$module$input$core$module(state){
var key = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"input","input",-2097503808,null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"atom","atom",-397043653),state], null),new cljs.core.Keyword(null,"listen","listen",1649504723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keypress","keypress",1625181642),((function (key){
return (function (value){
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,key),document.activeElement.getAttribute("modulekey"))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.conj,value);
} else {
return null;
}
});})(key))
], null),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),((function (key){
return (function (){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,state));
});})(key))
,new cljs.core.Keyword(null,"keypress","keypress",1625181642),((function (key){
return (function (value){
return cljs.core.swap_BANG_.call(null,state,cljs.core.conj,value);
});})(key))
,new cljs.core.Keyword(null,"set","set",304602554),((function (key){
return (function (value){
return cljs.core.reset_BANG_.call(null,state,cljs.core.vec.call(null,clojure.string.split.call(null,value,(new RegExp("")))));
});})(key))
], null)], null);
});
arcanum.module.input.core.view = (function arcanum$module$input$core$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5975 = arguments.length;
var i__4731__auto___5976 = (0);
while(true){
if((i__4731__auto___5976 < len__4730__auto___5975)){
args__4736__auto__.push((arguments[i__4731__auto___5976]));

var G__5977 = (i__4731__auto___5976 + (1));
i__4731__auto___5976 = G__5977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.input.core.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.input.core.view.cljs$core$IFn$_invoke$arity$variadic = (function (module,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"core","core",-86019209),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modulekey","modulekey",110023756),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5972_SHARP_){
return arcanum.module.call_BANG_.call(null,module,new cljs.core.Keyword(null,"set","set",304602554),p1__5972_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),arcanum.module.call_BANG_.call(null,module,new cljs.core.Keyword(null,"value","value",305978217))], null)], null);
})], null);
});

arcanum.module.input.core.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.input.core.view.cljs$lang$applyTo = (function (seq5973){
var G__5974 = cljs.core.first.call(null,seq5973);
var seq5973__$1 = cljs.core.next.call(null,seq5973);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5974,seq5973__$1);
});


//# sourceMappingURL=core.js.map

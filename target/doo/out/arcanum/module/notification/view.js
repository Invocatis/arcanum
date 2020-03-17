// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.notification.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('hiccup_icons.fa');
arcanum.module.notification.view.notification = (function arcanum$module$notification$view$notification(p__6376){
var map__6377 = p__6376;
var map__6377__$1 = (((((!((map__6377 == null))))?(((((map__6377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6377):map__6377);
var notification = map__6377__$1;
var content = cljs.core.get.call(null,map__6377__$1,new cljs.core.Keyword(null,"content","content",15833224));
var key = cljs.core.get.call(null,map__6377__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.call(null,map__6377__$1,new cljs.core.Keyword(null,"params","params",710516235));
var dismiss = cljs.core.get.call(null,map__6377__$1,new cljs.core.Keyword(null,"dismiss","dismiss",412569545));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notification","div.notification",-180031586),cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"key","key",-1516042587),key),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),cljs.core.PersistentArrayMap.EMPTY,content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.dismiss","button.dismiss",-1154008466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),(function (){var or__4131__auto__ = dismiss;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hiccup_icons.fa.times_solid;
}
})()], null)], null);
});
arcanum.module.notification.view.nb = (function arcanum$module$notification$view$nb(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6381 = arguments.length;
var i__4731__auto___6382 = (0);
while(true){
if((i__4731__auto___6382 < len__4730__auto___6381)){
args__4736__auto__.push((arguments[i__4731__auto___6382]));

var G__6383 = (i__4731__auto___6382 + (1));
i__4731__auto___6382 = G__6383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.notification.view.nb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.notification.view.nb.cljs$core$IFn$_invoke$arity$variadic = (function (params,notifications){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notification-board","div.notification-board",-1179227107)], null),cljs.core.map.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return arcanum.module.notification.view.notification.call(null,x);
} else {
return x;
}
}),notifications));
});

arcanum.module.notification.view.nb.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.notification.view.nb.cljs$lang$applyTo = (function (seq6379){
var G__6380 = cljs.core.first.call(null,seq6379);
var seq6379__$1 = cljs.core.next.call(null,seq6379);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6380,seq6379__$1);
});


//# sourceMappingURL=view.js.map

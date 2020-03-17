// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.notification.core');
goog.require('cljs.core');
goog.require('retort.core');
goog.require('arcanum.module');
goog.require('arcanum.module.notification.view');
goog.require('arcanum.module.notification.style');
arcanum.module.notification.core.dismiss = (function arcanum$module$notification$core$dismiss(p__6387,key){
var map__6388 = p__6387;
var map__6388__$1 = (((((!((map__6388 == null))))?(((((map__6388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6388):map__6388);
var state = map__6388__$1;
var order = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var notifications = cljs.core.get.call(null,map__6388__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,((function (map__6388,map__6388__$1,state,order,notifications){
return (function (p1__6386_SHARP_){
return cljs.core._EQ_.call(null,p1__6386_SHARP_,key);
});})(map__6388,map__6388__$1,state,order,notifications))
,order)),new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.dissoc.call(null,notifications,key)], null);
});
arcanum.module.notification.core.design = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".notifications",".notifications",-836756902),(function (p__6391){
var map__6392 = p__6391;
var map__6392__$1 = (((((!((map__6392 == null))))?(((((map__6392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6392):map__6392);
var notification = cljs.core.get.call(null,map__6392__$1,new cljs.core.Keyword(null,"notification","notification",-222338233));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.map.call(null,((function (map__6392,map__6392__$1,notification){
return (function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notification","div.notification",-180031586),c], null);
});})(map__6392,map__6392__$1,notification))
,cljs.core.reverse.call(null,arcanum.module.call_BANG_.call(null,notification,new cljs.core.Keyword(null,"notifications","notifications",1685638001))))], null);
})], null),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".dismiss",".dismiss",123988793),(function (p__6394){
var map__6395 = p__6394;
var map__6395__$1 = (((((!((map__6395 == null))))?(((((map__6395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6395):map__6395);
var notification = cljs.core.get.call(null,map__6395__$1,new cljs.core.Keyword(null,"notification","notification",-222338233));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__6395,map__6395__$1,notification){
return (function (p1__6390_SHARP_){
return arcanum.module.call_BANG_.call(null,notification,new cljs.core.Keyword(null,"dismiss","dismiss",412569545),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__6390_SHARP_));
});})(map__6395,map__6395__$1,notification))
], null);
})], null),new cljs.core.Keyword(null,"mold","mold",-1514698660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".notifcations",".notifcations",1772495021),(function (p__6397){
var vec__6398 = p__6397;
var seq__6399 = cljs.core.seq.call(null,vec__6398);
var first__6400 = cljs.core.first.call(null,seq__6399);
var seq__6399__$1 = cljs.core.next.call(null,seq__6399);
var tag = first__6400;
var first__6400__$1 = cljs.core.first.call(null,seq__6399__$1);
var seq__6399__$2 = cljs.core.next.call(null,seq__6399__$1);
var attributes = first__6400__$1;
var children = seq__6399__$2;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attributes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),arcanum.module.notification.style.static$], null)], null),children);
})], null)], null);
arcanum.module.notification.core._module = (function arcanum$module$notification$core$_module(state,attributes){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"atom","atom",-397043653),state], null),new cljs.core.Keyword(null,"design","design",1241338903),arcanum.module.notification.core.design,new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (){
return cljs.core.map.call(null,(function (p1__6401_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001),p1__6401_SHARP_], null));
}),new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}),new cljs.core.Keyword(null,"dismiss","dismiss",412569545),(function (key){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001),key], null)))){
return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state,(function (p1__6402_SHARP_){
return arcanum.module.notification.core.dismiss.call(null,p1__6402_SHARP_,key);
}));
}),(0));
} else {
return null;
}
}),new cljs.core.Keyword(null,"notification","notification",-222338233),(function (notification){
cljs.core.println.call(null,notification);

var key = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(notification);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
cljs.core.swap_BANG_.call(null,state,((function (key){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001),cljs.core.assoc,key,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(notification)),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj,key);
});})(key))
);

return key;
})], null)], null);
});
arcanum.module.notification.core.module = (function arcanum$module$notification$core$module(state,p__6403){
var map__6404 = p__6403;
var map__6404__$1 = (((((!((map__6404 == null))))?(((((map__6404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6404):map__6404);
var attributes = map__6404__$1;
var timeout = cljs.core.get.call(null,map__6404__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var module = arcanum.module.notification.core._module.call(null,state,attributes);
return cljs.core.update_in.call(null,module,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.Keyword(null,"notification","notification",-222338233)], null),((function (module,map__6404,map__6404__$1,attributes,timeout){
return (function (f){
return ((function (module,map__6404,map__6404__$1,attributes,timeout){
return (function (notification){
var key = f.call(null,notification);
return setTimeout(((function (key,module,map__6404,map__6404__$1,attributes,timeout){
return (function (){
return arcanum.module.call_BANG_.call(null,module,new cljs.core.Keyword(null,"dismiss","dismiss",412569545),key);
});})(key,module,map__6404,map__6404__$1,attributes,timeout))
,timeout);
});
;})(module,map__6404,map__6404__$1,attributes,timeout))
});})(module,map__6404,map__6404__$1,attributes,timeout))
);
});

//# sourceMappingURL=core.js.map

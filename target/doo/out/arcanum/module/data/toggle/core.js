// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module.data.toggle.core');
goog.require('cljs.core');
goog.require('arcanum.module');
goog.require('arcanum.module.data.value.core');
arcanum.module.data.toggle.core.module = (function arcanum$module$data$toggle$core$module(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6497 = arguments.length;
var i__4731__auto___6498 = (0);
while(true){
if((i__4731__auto___6498 < len__4730__auto___6497)){
args__4736__auto__.push((arguments[i__4731__auto___6498]));

var G__6499 = (i__4731__auto___6498 + (1));
i__4731__auto___6498 = G__6499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.data.toggle.core.module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.data.toggle.core.module.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__6488){
var vec__6489 = p__6488;
var map__6492 = cljs.core.nth.call(null,vec__6489,(0),null);
var map__6492__$1 = (((((!((map__6492 == null))))?(((((map__6492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6492):map__6492);
var toggler = cljs.core.get.call(null,map__6492__$1,new cljs.core.Keyword(null,"toggler","toggler",-533887283),cljs.core.not);
var default$ = cljs.core.get.call(null,map__6492__$1,new cljs.core.Keyword(null,"default","default",-1987822328),false);
var value = arcanum.module.data.value.core.module.call(null,state);
cljs.core.reset_BANG_.call(null,state,default$);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"atom","atom",-397043653),state], null),new cljs.core.Keyword(null,"extends","extends",-954903259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),new cljs.core.Keyword(null,"api","api",-899839580),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),((function (value,vec__6489,map__6492,map__6492__$1,toggler,default$){
return (function (){
return arcanum.module.call_BANG_.call(null,value,new cljs.core.Keyword(null,"update","update",1045576396),toggler);
});})(value,vec__6489,map__6492,map__6492__$1,toggler,default$))
,new cljs.core.Keyword(null,"value","value",305978217),((function (value,vec__6489,map__6492,map__6492__$1,toggler,default$){
return (function (){
return arcanum.module.call_BANG_.call(null,value,new cljs.core.Keyword(null,"get","get",1683182755));
});})(value,vec__6489,map__6492,map__6492__$1,toggler,default$))
], null),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".toggle",".toggle",1690474269),((function (value,vec__6489,map__6492,map__6492__$1,toggler,default$){
return (function (p__6494){
var map__6495 = p__6494;
var map__6495__$1 = (((((!((map__6495 == null))))?(((((map__6495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6495):map__6495);
var toggle = cljs.core.get.call(null,map__6495__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__6495,map__6495__$1,toggle,value,vec__6489,map__6492,map__6492__$1,toggler,default$){
return (function (){
return arcanum.module.call_BANG_.call(null,toggle,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
});})(map__6495,map__6495__$1,toggle,value,vec__6489,map__6492,map__6492__$1,toggler,default$))
,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arcanum.module.call_BANG_.call(null,toggle,new cljs.core.Keyword(null,"get","get",1683182755)))], null);
});})(value,vec__6489,map__6492,map__6492__$1,toggler,default$))
], null)], null)], null);
});

arcanum.module.data.toggle.core.module.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.data.toggle.core.module.cljs$lang$applyTo = (function (seq6486){
var G__6487 = cljs.core.first.call(null,seq6486);
var seq6486__$1 = cljs.core.next.call(null,seq6486);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6487,seq6486__$1);
});


//# sourceMappingURL=core.js.map

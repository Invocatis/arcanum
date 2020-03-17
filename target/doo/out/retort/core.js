// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.core');
goog.require('cljs.core');
goog.require('retort.inject');
goog.require('retort.wire');
goog.require('retort.mold');
goog.require('retort.hiccup');
goog.require('retort.selector');
retort.core.context_defaults = (function retort$core$context_defaults(p__3762){
var map__3763 = p__3762;
var map__3763__$1 = (((((!((map__3763 == null))))?(((((map__3763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3763):map__3763);
var context = map__3763__$1;
var position = cljs.core.get.call(null,map__3763__$1,new cljs.core.Keyword(null,"position","position",-2011731912),(0));
var siblings = cljs.core.get.call(null,map__3763__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157),cljs.core.PersistentVector.EMPTY);
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"siblings","siblings",382285157),siblings);
});
retort.core.hookup = (function retort$core$hookup(design,func,hiccup,context){
var design__$1 = design;
var hiccup__$1 = hiccup;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,design__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__3765 = temp__5718__auto__;
var selector = cljs.core.nth.call(null,vec__3765,(0),null);
var values = cljs.core.nth.call(null,vec__3765,(1),null);
if(retort.selector.selects_QMARK_.call(null,selector,hiccup__$1,context)){
var G__3768 = cljs.core.rest.call(null,design__$1);
var G__3769 = func.call(null,values,hiccup__$1);
design__$1 = G__3768;
hiccup__$1 = G__3769;
continue;
} else {
var G__3770 = cljs.core.rest.call(null,design__$1);
var G__3771 = hiccup__$1;
design__$1 = G__3770;
hiccup__$1 = G__3771;
continue;
}
} else {
return hiccup__$1;
}
break;
}
});
retort.core.brew_STAR_ = (function retort$core$brew_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3779 = arguments.length;
var i__4731__auto___3780 = (0);
while(true){
if((i__4731__auto___3780 < len__4730__auto___3779)){
args__4736__auto__.push((arguments[i__4731__auto___3780]));

var G__3781 = (i__4731__auto___3780 + (1));
i__4731__auto___3780 = G__3781;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.core.brew_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.core.brew_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (design,hiccup,p__3775){
var vec__3776 = p__3775;
var context = cljs.core.nth.call(null,vec__3776,(0),null);
var context__$1 = retort.core.context_defaults.call(null,context);
var hicc = retort.hiccup.clean.call(null,hiccup);
var hicc__$1 = retort.core.hookup.call(null,cljs.core.get.call(null,design,new cljs.core.Keyword(null,"mold","mold",-1514698660)),retort.mold.mold,hicc,context__$1);
var hicc__$2 = retort.core.hookup.call(null,cljs.core.get.call(null,design,new cljs.core.Keyword(null,"data","data",-232669377)),retort.inject.inject,hicc__$1,context__$1);
var hicc__$3 = retort.core.hookup.call(null,cljs.core.get.call(null,design,new cljs.core.Keyword(null,"transition","transition",765692007)),retort.wire.wire,hicc__$2,context__$1);
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,hicc__$3))){
return retort.core.brew_STAR_.call(null,design,cljs.core.apply.call(null,cljs.core.first.call(null,hicc__$3),cljs.core.rest.call(null,hicc__$3)),context__$1);
} else {
return hicc__$3;
}
});

retort.core.brew_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.core.brew_STAR_.cljs$lang$applyTo = (function (seq3772){
var G__3773 = cljs.core.first.call(null,seq3772);
var seq3772__$1 = cljs.core.next.call(null,seq3772);
var G__3774 = cljs.core.first.call(null,seq3772__$1);
var seq3772__$2 = cljs.core.next.call(null,seq3772__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3773,G__3774,seq3772__$2);
});

retort.core.join = (function retort$core$join(p__3782,h,d){
var map__3783 = p__3782;
var map__3783__$1 = (((((!((map__3783 == null))))?(((((map__3783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3783):map__3783);
var hiccup = cljs.core.get.call(null,map__3783__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var design = cljs.core.get.call(null,map__3783__$1,new cljs.core.Keyword(null,"design","design",1241338903));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),((cljs.core.fn_QMARK_.call(null,hiccup))?hiccup.call(null,h):(function (){var or__4131__auto__ = hiccup;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return h;
}
})()),new cljs.core.Keyword(null,"design","design",1241338903),((cljs.core.fn_QMARK_.call(null,design))?design.call(null,d):(function (){var or__4131__auto__ = design;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return d;
}
})())], null);
});
retort.core.brew = (function retort$core$brew(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3795 = arguments.length;
var i__4731__auto___3796 = (0);
while(true){
if((i__4731__auto___3796 < len__4730__auto___3795)){
args__4736__auto__.push((arguments[i__4731__auto___3796]));

var G__3797 = (i__4731__auto___3796 + (1));
i__4731__auto___3796 = G__3797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.core.brew.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.core.brew.cljs$core$IFn$_invoke$arity$variadic = (function (design,hiccup,p__3789){
var vec__3790 = p__3789;
var context = cljs.core.nth.call(null,vec__3790,(0),null);
if(cljs.core.vector_QMARK_.call(null,hiccup)){
var hicc = retort.core.brew_STAR_.call(null,design,hiccup,context);
if(cljs.core.map_QMARK_.call(null,hicc)){
var map__3793 = retort.core.join.call(null,hicc,hiccup,design);
var map__3793__$1 = (((((!((map__3793 == null))))?(((((map__3793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3793):map__3793);
var design__$1 = cljs.core.get.call(null,map__3793__$1,new cljs.core.Keyword(null,"design","design",1241338903));
var hiccup__$1 = cljs.core.get.call(null,map__3793__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
return retort.core.brew.call(null,design__$1,hiccup__$1,context);
} else {
var children = retort.hiccup.children.call(null,hicc);
return cljs.core.into.call(null,(((cljs.core.count.call(null,hicc) > (2)))?cljs.core.subvec.call(null,hicc,(0),(2)):hicc),cljs.core.map_indexed.call(null,((function (children,hicc,vec__3790,context){
return (function (i,child){
return retort.core.brew.call(null,design,child,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),i,new cljs.core.Keyword(null,"parent","parent",-878878779),context,new cljs.core.Keyword(null,"siblings","siblings",382285157),children], null));
});})(children,hicc,vec__3790,context))
,children));
}
} else {
if(cljs.core.seq_QMARK_.call(null,hiccup)){
return cljs.core.map.call(null,((function (vec__3790,context){
return (function (p1__3785_SHARP_){
return retort.core.brew.call(null,design,p1__3785_SHARP_,context);
});})(vec__3790,context))
,hiccup);
} else {
return hiccup;

}
}
});

retort.core.brew.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.core.brew.cljs$lang$applyTo = (function (seq3786){
var G__3787 = cljs.core.first.call(null,seq3786);
var seq3786__$1 = cljs.core.next.call(null,seq3786);
var G__3788 = cljs.core.first.call(null,seq3786__$1);
var seq3786__$2 = cljs.core.next.call(null,seq3786__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3787,G__3788,seq3786__$2);
});

retort.core.design_merge = (function retort$core$design_merge(var_args){
var G__3802 = arguments.length;
switch (G__3802) {
case 1:
return retort.core.design_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return retort.core.design_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___3804 = arguments.length;
var i__4731__auto___3805 = (0);
while(true){
if((i__4731__auto___3805 < len__4730__auto___3804)){
args_arr__4751__auto__.push((arguments[i__4731__auto___3805]));

var G__3806 = (i__4731__auto___3805 + (1));
i__4731__auto___3805 = G__3806;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return retort.core.design_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

retort.core.design_merge.cljs$core$IFn$_invoke$arity$1 = (function (d0){
return d0;
});

retort.core.design_merge.cljs$core$IFn$_invoke$arity$2 = (function (d0,d1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mold","mold",-1514698660),cljs.core.merge_with.call(null,cljs.core.comp,new cljs.core.Keyword(null,"mold","mold",-1514698660).cljs$core$IFn$_invoke$arity$1(d0),new cljs.core.Keyword(null,"mold","mold",-1514698660).cljs$core$IFn$_invoke$arity$1(d1)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge_with.call(null,cljs.core.merge,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d0),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d1)),new cljs.core.Keyword(null,"transition","transition",765692007),cljs.core.merge_with.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.comp),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(d0),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(d1))], null);
});

retort.core.design_merge.cljs$core$IFn$_invoke$arity$variadic = (function (d0,d1,more){
return cljs.core.reduce.call(null,retort.core.design_merge,retort.core.design_merge.call(null,d0,d1),more);
});

/** @this {Function} */
retort.core.design_merge.cljs$lang$applyTo = (function (seq3799){
var G__3800 = cljs.core.first.call(null,seq3799);
var seq3799__$1 = cljs.core.next.call(null,seq3799);
var G__3801 = cljs.core.first.call(null,seq3799__$1);
var seq3799__$2 = cljs.core.next.call(null,seq3799__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3800,G__3801,seq3799__$2);
});

retort.core.design_merge.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map

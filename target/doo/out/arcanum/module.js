// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.module');
goog.require('cljs.core');
goog.require('arcanum.util');
goog.require('retort.core');
goog.require('retort.hiccup');
arcanum.module.distinct_by = (function arcanum$module$distinct_by(f,coll){
var step = (function arcanum$module$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__5909,seen__$1){
while(true){
var vec__5910 = p__5909;
var x = cljs.core.nth.call(null,vec__5910,(0),null);
var xs__$1 = vec__5910;
var temp__5720__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f.call(null,x))){
var G__5913 = cljs.core.rest.call(null,s);
var G__5914 = seen__$1;
p__5909 = G__5913;
seen__$1 = G__5914;
continue;
} else {
return cljs.core.cons.call(null,x,arcanum$module$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,x)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
arcanum.module._call = (function arcanum$module$_call(module,point,args){
if(cljs.core.fn_QMARK_.call(null,point)){
return cljs.core.apply.call(null,point,args);
} else {
if(cljs.core.map_QMARK_.call(null,point)){
var map__5915 = point;
var map__5915__$1 = (((((!((map__5915 == null))))?(((((map__5915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5915):map__5915);
var calls = cljs.core.get.call(null,map__5915__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var func = cljs.core.get.call(null,map__5915__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var results = cljs.core.map.call(null,((function (map__5915,map__5915__$1,calls,func){
return (function (p__5917){
var vec__5918 = p__5917;
var seq__5919 = cljs.core.seq.call(null,vec__5918);
var first__5920 = cljs.core.first.call(null,seq__5919);
var seq__5919__$1 = cljs.core.next.call(null,seq__5919);
var point__$1 = first__5920;
var args__$1 = seq__5919__$1;
return arcanum.module._call.call(null,module,point__$1,args__$1);
});})(map__5915,map__5915__$1,calls,func))
,calls);
return cljs.core.apply.call(null,func,results);
} else {
return null;
}
}
});
arcanum.module.get_points = (function arcanum$module$get_points(module,point){
if(cljs.core.truth_(module)){
var base = cljs.core.get_in.call(null,module,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api","api",-899839580),point], null));
var exts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (base){
return (function (p1__5921_SHARP_){
return arcanum.module.get_points.call(null,p1__5921_SHARP_,point);
});})(base))
,new cljs.core.Keyword(null,"extends","extends",-954903259).cljs$core$IFn$_invoke$arity$1(module))));
if((base == null)){
return exts;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base], null),exts);
}
} else {
return null;
}
});
arcanum.module.get_point = (function arcanum$module$get_point(module,point){
if(cljs.core.truth_(module)){
var or__4131__auto__ = cljs.core.get_in.call(null,module,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api","api",-899839580),point], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4131__auto__){
return (function (p1__5922_SHARP_){
return arcanum.module.get_point.call(null,p1__5922_SHARP_,point);
});})(or__4131__auto__))
,new cljs.core.Keyword(null,"extends","extends",-954903259).cljs$core$IFn$_invoke$arity$1(module)));
}
} else {
return null;
}
});
arcanum.module.call_BANG_ = (function arcanum$module$call_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5926 = arguments.length;
var i__4731__auto___5927 = (0);
while(true){
if((i__4731__auto___5927 < len__4730__auto___5926)){
args__4736__auto__.push((arguments[i__4731__auto___5927]));

var G__5928 = (i__4731__auto___5927 + (1));
i__4731__auto___5927 = G__5928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return arcanum.module.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

arcanum.module.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (module,point,args){
return arcanum.module._call.call(null,module,arcanum.module.get_point.call(null,module,point),args);
});

arcanum.module.call_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
arcanum.module.call_BANG_.cljs$lang$applyTo = (function (seq5923){
var G__5924 = cljs.core.first.call(null,seq5923);
var seq5923__$1 = cljs.core.next.call(null,seq5923);
var G__5925 = cljs.core.first.call(null,seq5923__$1);
var seq5923__$2 = cljs.core.next.call(null,seq5923__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5924,G__5925,seq5923__$2);
});

arcanum.module.state = (function arcanum$module$state(module){
return new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(module));
});
arcanum.module.modules = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
arcanum.module.register_BANG_ = (function arcanum$module$register_BANG_(module,id){
return cljs.core.swap_BANG_.call(null,arcanum.module.modules,cljs.core.assoc,id,module);
});
arcanum.module.instances = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
arcanum.module.instantiate_BANG_ = (function arcanum$module$instantiate_BANG_(name,module,state,attributes){
var instance = module.call(null,state,attributes);
cljs.core.swap_BANG_.call(null,arcanum.module.instances,cljs.core.assoc,name,instance);

return instance;
});
arcanum.module.instantiate_or_get_BANG_ = (function arcanum$module$instantiate_or_get_BANG_(name,module,state,attributes){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,arcanum.module.instances),name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return arcanum.module.instantiate_BANG_.call(null,name,module,state,attributes);
}
});
arcanum.module.emit_BANG_ = (function arcanum$module$emit_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5935 = arguments.length;
var i__4731__auto___5936 = (0);
while(true){
if((i__4731__auto___5936 < len__4730__auto___5935)){
args__4736__auto__.push((arguments[i__4731__auto___5936]));

var G__5937 = (i__4731__auto___5936 + (1));
i__4731__auto___5936 = G__5937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return arcanum.module.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

arcanum.module.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event,args){
var seq__5931 = cljs.core.seq.call(null,cljs.core.deref.call(null,arcanum.module.modules));
var chunk__5932 = null;
var count__5933 = (0);
var i__5934 = (0);
while(true){
if((i__5934 < count__5933)){
var module = cljs.core._nth.call(null,chunk__5932,i__5934);
var temp__5720__auto___5938 = cljs.core.get.call(null,new cljs.core.Keyword(null,"listen","listen",1649504723).cljs$core$IFn$_invoke$arity$1(module),event);
if(cljs.core.truth_(temp__5720__auto___5938)){
var listener_5939 = temp__5720__auto___5938;
cljs.core.apply.call(null,listener_5939,args);
} else {
}


var G__5940 = seq__5931;
var G__5941 = chunk__5932;
var G__5942 = count__5933;
var G__5943 = (i__5934 + (1));
seq__5931 = G__5940;
chunk__5932 = G__5941;
count__5933 = G__5942;
i__5934 = G__5943;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__5931);
if(temp__5720__auto__){
var seq__5931__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5931__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__5931__$1);
var G__5944 = cljs.core.chunk_rest.call(null,seq__5931__$1);
var G__5945 = c__4550__auto__;
var G__5946 = cljs.core.count.call(null,c__4550__auto__);
var G__5947 = (0);
seq__5931 = G__5944;
chunk__5932 = G__5945;
count__5933 = G__5946;
i__5934 = G__5947;
continue;
} else {
var module = cljs.core.first.call(null,seq__5931__$1);
var temp__5720__auto___5948__$1 = cljs.core.get.call(null,new cljs.core.Keyword(null,"listen","listen",1649504723).cljs$core$IFn$_invoke$arity$1(module),event);
if(cljs.core.truth_(temp__5720__auto___5948__$1)){
var listener_5949 = temp__5720__auto___5948__$1;
cljs.core.apply.call(null,listener_5949,args);
} else {
}


var G__5950 = cljs.core.next.call(null,seq__5931__$1);
var G__5951 = null;
var G__5952 = (0);
var G__5953 = (0);
seq__5931 = G__5950;
chunk__5932 = G__5951;
count__5933 = G__5952;
i__5934 = G__5953;
continue;
}
} else {
return null;
}
}
break;
}
});

arcanum.module.emit_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
arcanum.module.emit_BANG_.cljs$lang$applyTo = (function (seq5929){
var G__5930 = cljs.core.first.call(null,seq5929);
var seq5929__$1 = cljs.core.next.call(null,seq5929);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5930,seq5929__$1);
});

arcanum.module._resolve = (function arcanum$module$_resolve(class$,instance,p__5954){
var map__5955 = p__5954;
var map__5955__$1 = (((((!((map__5955 == null))))?(((((map__5955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5955):map__5955);
var module = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var call = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"call","call",-519999866));
var args = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var as = cljs.core.get.call(null,map__5955__$1,new cljs.core.Keyword(null,"as","as",1148689641));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([as,(cljs.core.truth_(call)?cljs.core.apply.call(null,arcanum.module.call_BANG_,instance,call,args):instance)]);
});
arcanum.module.mold = (function arcanum$module$mold(class$,instance,id,p__5959){
var vec__5960 = p__5959;
var seq__5961 = cljs.core.seq.call(null,vec__5960);
var first__5962 = cljs.core.first.call(null,seq__5961);
var seq__5961__$1 = cljs.core.next.call(null,seq__5961);
var tag = first__5962;
var first__5962__$1 = cljs.core.first.call(null,seq__5961__$1);
var seq__5961__$2 = cljs.core.next.call(null,seq__5961__$1);
var map__5963 = first__5962__$1;
var map__5963__$1 = (((((!((map__5963 == null))))?(((((map__5963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5963):map__5963);
var attrs = map__5963__$1;
var alchemy = cljs.core.get.call(null,map__5963__$1,new cljs.core.Keyword(null,"alchemy","alchemy",-1601234386));
var children = seq__5961__$2;
var hiccup = vec__5960;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,attrs,((cljs.core.vector_QMARK_.call(null,alchemy))?(function (){var mod_def = arcanum.util.get_first.call(null,((function (vec__5960,seq__5961,first__5962,seq__5961__$1,tag,first__5962__$1,seq__5961__$2,map__5963,map__5963__$1,attrs,alchemy,children,hiccup){
return (function (p1__5957_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5957_SHARP_),id);
});})(vec__5960,seq__5961,first__5962,seq__5961__$1,tag,first__5962__$1,seq__5961__$2,map__5963,map__5963__$1,attrs,alchemy,children,hiccup))
,alchemy);
var alchemy__$1 = arcanum.util.remove_one.call(null,((function (mod_def,vec__5960,seq__5961,first__5962,seq__5961__$1,tag,first__5962__$1,seq__5961__$2,map__5963,map__5963__$1,attrs,alchemy,children,hiccup){
return (function (p1__5958_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5958_SHARP_),id);
});})(mod_def,vec__5960,seq__5961,first__5962,seq__5961__$1,tag,first__5962__$1,seq__5961__$2,map__5963,map__5963__$1,attrs,alchemy,children,hiccup))
,alchemy);
return cljs.core.merge.call(null,cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"alchemy","alchemy",-1601234386),alchemy__$1),arcanum.module._resolve.call(null,class$,instance,mod_def));
})():cljs.core.merge.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"alchemy","alchemy",-1601234386)),arcanum.module._resolve.call(null,class$,instance,alchemy))))], null),children);
});
arcanum.module.mold_module = (function arcanum$module$mold_module(state,modules,p__5966){
var vec__5967 = p__5966;
var seq__5968 = cljs.core.seq.call(null,vec__5967);
var first__5969 = cljs.core.first.call(null,seq__5968);
var seq__5968__$1 = cljs.core.next.call(null,seq__5968);
var tag = first__5969;
var first__5969__$1 = cljs.core.first.call(null,seq__5968__$1);
var seq__5968__$2 = cljs.core.next.call(null,seq__5968__$1);
var attributes = first__5969__$1;
var children = seq__5968__$2;
var hiccup = vec__5967;
var id = cljs.core.keyword.call(null,retort.hiccup.id.call(null,hiccup));
var class$ = cljs.core.keyword.call(null,cljs.core.first.call(null,retort.hiccup.classes.call(null,hiccup)));
var state__$1 = arcanum.util.subatom.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,id], null));
var module = cljs.core.get.call(null,cljs.core.deref.call(null,modules),class$);
var instance = arcanum.module.instantiate_or_get_BANG_.call(null,id,module,state__$1,attributes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children),new cljs.core.Keyword(null,"design","design",1241338903),((function (id,class$,state__$1,module,instance,vec__5967,seq__5968,first__5969,seq__5968__$1,tag,first__5969__$1,seq__5968__$2,attributes,children,hiccup){
return (function (p1__5965_SHARP_){
return retort.core.design_merge.call(null,p1__5965_SHARP_,new cljs.core.Keyword(null,"design","design",1241338903).cljs$core$IFn$_invoke$arity$1(instance),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mold","mold",-1514698660),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alchemy","alchemy",-1601234386),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",1424618191),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?","?",-1703165233),true], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alchemy","alchemy",-1601234386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",1424618191),id], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"|","|",-352411576),true], null)),cljs.core.partial.call(null,arcanum.module.mold,class$,instance,id)])], null));
});})(id,class$,state__$1,module,instance,vec__5967,seq__5968,first__5969,seq__5968__$1,tag,first__5969__$1,seq__5968__$2,attributes,children,hiccup))
], null);
});
arcanum.module.design = (function arcanum$module$design(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mold","mold",-1514698660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",1424618191),cljs.core.partial.call(null,arcanum.module.mold_module,state,arcanum.module.modules)], null)], null);
});

//# sourceMappingURL=module.js.map

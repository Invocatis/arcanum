// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.inject');
goog.require('cljs.core');
retort.inject.attributes_of = (function retort$inject$attributes_of(m){
var temp__5718__auto__ = cljs.core.find.call(null,m,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__3731 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__3731,(0),null);
var v = cljs.core.nth.call(null,vec__3731,(1),null);
return v;
} else {
if(((cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"args","args",1315556576))) || (cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"!args","!args",-2022109515))))){
return null;
} else {
return m;
}
}
});
retort.inject.inject_attributes = (function retort$inject$inject_attributes(data,p__3734){
var vec__3735 = p__3734;
var seq__3736 = cljs.core.seq.call(null,vec__3735);
var first__3737 = cljs.core.first.call(null,seq__3736);
var seq__3736__$1 = cljs.core.next.call(null,seq__3736);
var tag = first__3737;
var first__3737__$1 = cljs.core.first.call(null,seq__3736__$1);
var seq__3736__$2 = cljs.core.next.call(null,seq__3736__$1);
var attributes = first__3737__$1;
var children = seq__3736__$2;
var hiccup = vec__3735;
return cljs.core.update.call(null,hiccup,(1),cljs.core.merge,((cljs.core.fn_QMARK_.call(null,data))?cljs.core.apply.call(null,data,attributes,children):data));
});
retort.inject.inject_args = (function retort$inject$inject_args(data,p__3738){
var vec__3739 = p__3738;
var seq__3740 = cljs.core.seq.call(null,vec__3739);
var first__3741 = cljs.core.first.call(null,seq__3740);
var seq__3740__$1 = cljs.core.next.call(null,seq__3740);
var tag = first__3741;
var first__3741__$1 = cljs.core.first.call(null,seq__3740__$1);
var seq__3740__$2 = cljs.core.next.call(null,seq__3740__$1);
var attributes = first__3741__$1;
var children = seq__3740__$2;
var hiccup = vec__3739;
var temp__5718__auto__ = cljs.core.find.call(null,data,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__3742 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__3742,(0),null);
var args = cljs.core.nth.call(null,vec__3742,(1),null);
return cljs.core.into.call(null,hiccup,((cljs.core.fn_QMARK_.call(null,args))?cljs.core.apply.call(null,args,attributes,children):args));
} else {
return hiccup;
}
});
retort.inject.inject = (function retort$inject$inject(data,p__3745){
var vec__3746 = p__3745;
var seq__3747 = cljs.core.seq.call(null,vec__3746);
var first__3748 = cljs.core.first.call(null,seq__3747);
var seq__3747__$1 = cljs.core.next.call(null,seq__3747);
var tag = first__3748;
var first__3748__$1 = cljs.core.first.call(null,seq__3747__$1);
var seq__3747__$2 = cljs.core.next.call(null,seq__3747__$1);
var attr = first__3748__$1;
var args = seq__3747__$2;
var hiccup = vec__3746;
var data__$1 = ((cljs.core.fn_QMARK_.call(null,data))?data.call(null,attr):data);
return retort.inject.inject_args.call(null,data__$1,retort.inject.inject_attributes.call(null,data__$1,hiccup));
});

//# sourceMappingURL=inject.js.map

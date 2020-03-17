// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('retort.selector.grammar');
retort.hiccup.html_tag_regex = /^[a-zA-Z0-9\-]+/;
retort.hiccup.tag__GT_html_tag = (function retort$hiccup$tag__GT_html_tag(tag){
return cljs.core.keyword.call(null,cljs.core.re_find.call(null,retort.hiccup.html_tag_regex,cljs.core.name.call(null,tag)));
});
retort.hiccup.class_regex = /(?:[\.])([a-zA-Z0-9\-]+)/;
retort.hiccup.split_by_character = (function retort$hiccup$split_by_character(s,char$){
var from_index = (0);
var tokens = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = clojure.string.index_of.call(null,s,char$,from_index);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
var G__3619 = (i + (1));
var G__3620 = cljs.core.conj.call(null,tokens,cljs.core.subs.call(null,s,from_index,i));
from_index = G__3619;
tokens = G__3620;
continue;
} else {
return cljs.core.conj.call(null,tokens,cljs.core.subs.call(null,s,from_index));
}
break;
}
});
retort.hiccup.tag__GT_class_set = (function retort$hiccup$tag__GT_class_set(tag){
var s = cljs.core.name.call(null,tag);
var class_list = retort.hiccup.split_by_character.call(null,s,".");
var last = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.peek.call(null,class_list),/[^a-zA-Z0-9\-]/));
return cljs.core.set.call(null,cljs.core.rest.call(null,cljs.core.conj.call(null,cljs.core.pop.call(null,class_list),last)));
});
retort.hiccup.id_regex = /(?:[\#])([a-zA-Z0-9\-]+)/;
retort.hiccup.tag__GT_id = (function retort$hiccup$tag__GT_id(tag){
return cljs.core.second.call(null,cljs.core.re_find.call(null,retort.hiccup.id_regex,cljs.core.name.call(null,tag)));
});
retort.hiccup.fn_name = (function retort$hiccup$fn_name(f){
return cljs.core.last.call(null,clojure.string.split.call(null,(cljs.core.truth_(f)?f.name:null),/\$/));
});
retort.hiccup.tag = (function retort$hiccup$tag(hiccup){
if((cljs.core.first.call(null,hiccup) instanceof cljs.core.Keyword)){
return retort.hiccup.tag__GT_html_tag.call(null,cljs.core.first.call(null,hiccup));
} else {
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,hiccup))){
return cljs.core.keyword.call(null,retort.hiccup.fn_name.call(null,cljs.core.first.call(null,hiccup)));
} else {
return null;

}
}
});
retort.hiccup.classes = (function retort$hiccup$classes(hiccup){
return cljs.core.reduce.call(null,cljs.core.into,(new cljs.core.List(null,(((cljs.core.first.call(null,hiccup) instanceof cljs.core.Keyword))?retort.hiccup.tag__GT_class_set.call(null,cljs.core.first.call(null,hiccup)):cljs.core.PersistentHashSet.EMPTY),(new cljs.core.List(null,(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup));
if(and__4120__auto__){
return cljs.core.get.call(null,cljs.core.second.call(null,hiccup),new cljs.core.Keyword(null,"class","class",-2030961996));
} else {
return and__4120__auto__;
}
})())?clojure.string.split.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,hiccup)),/\s+/):null),(new cljs.core.List(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,hiccup))),null,(1),null)),(2),null)),(3),null)));
});
retort.hiccup.id = (function retort$hiccup$id(hiccup){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup)))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,hiccup)):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((cljs.core.first.call(null,hiccup) instanceof cljs.core.Keyword))?retort.hiccup.tag__GT_id.call(null,cljs.core.first.call(null,hiccup)):null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,hiccup)));
}
}
});
retort.hiccup.attributes = (function retort$hiccup$attributes(hiccup){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup))){
return cljs.core.second.call(null,hiccup);
} else {
return null;
}
});
retort.hiccup.children = (function retort$hiccup$children(hiccup){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup))){
if((cljs.core.count.call(null,hiccup) > (2))){
return cljs.core.subvec.call(null,hiccup,(2));
} else {
return null;
}
} else {
if((cljs.core.count.call(null,hiccup) > (1))){
return cljs.core.subvec.call(null,hiccup,(1));
} else {
return null;
}
}
});
retort.hiccup.clean = (function retort$hiccup$clean(hiccup){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup))){
return hiccup;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,hiccup),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.rest.call(null,hiccup));
}
});
retort.hiccup.strip_tag = (function retort$hiccup$strip_tag(p__3621){
var vec__3622 = p__3621;
var seq__3623 = cljs.core.seq.call(null,vec__3622);
var first__3624 = cljs.core.first.call(null,seq__3623);
var seq__3623__$1 = cljs.core.next.call(null,seq__3623);
var _ = first__3624;
var first__3624__$1 = cljs.core.first.call(null,seq__3623__$1);
var seq__3623__$2 = cljs.core.next.call(null,seq__3623__$1);
var attrs = first__3624__$1;
var children = seq__3623__$2;
var hiccup = vec__3622;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retort.hiccup.tag.call(null,hiccup),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),retort.hiccup.id.call(null,hiccup),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,retort.hiccup.classes.call(null,hiccup))], null))], null),children);
});

//# sourceMappingURL=hiccup.js.map

// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.selector.grammar');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
retort.selector.grammar.function_tag_regex = /(:?\+)([a-zA-Z0-9\-]+)/;
retort.selector.grammar.tag__GT_function_tag = (function retort$selector$grammar$tag__GT_function_tag(tag){
var vec__3560 = cljs.core.re_find.call(null,retort.selector.grammar.function_tag_regex,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__3560,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__3560,(1),null);
var tag__$1 = cljs.core.nth.call(null,vec__3560,(2),null);
return cljs.core.keyword.call(null,tag__$1);
});
retort.selector.grammar.html_tag_regex = /^[a-zA-Z0-9\-]+/;
retort.selector.grammar.tag__GT_html_tag = (function retort$selector$grammar$tag__GT_html_tag(tag){
return cljs.core.keyword.call(null,cljs.core.re_find.call(null,retort.selector.grammar.html_tag_regex,cljs.core.name.call(null,tag)));
});
retort.selector.grammar.class_regex = /(?:[\.])([a-zA-Z0-9\-]+)/;
retort.selector.grammar.split_by_character = (function retort$selector$grammar$split_by_character(s,char$){
var from_index = (0);
var tokens = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = clojure.string.index_of.call(null,s,char$,from_index);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
var G__3563 = (i + (1));
var G__3564 = cljs.core.conj.call(null,tokens,cljs.core.subs.call(null,s,from_index,i));
from_index = G__3563;
tokens = G__3564;
continue;
} else {
return cljs.core.conj.call(null,tokens,cljs.core.subs.call(null,s,from_index));
}
break;
}
});
retort.selector.grammar.tag__GT_class_set = (function retort$selector$grammar$tag__GT_class_set(tag){
var s = cljs.core.name.call(null,tag);
var class_list = retort.selector.grammar.split_by_character.call(null,s,".");
var last = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.peek.call(null,class_list),/[^a-zA-Z0-9\-]/));
var classes = cljs.core.set.call(null,cljs.core.rest.call(null,cljs.core.conj.call(null,cljs.core.pop.call(null,class_list),last)));
if(cljs.core.empty_QMARK_.call(null,classes)){
return null;
} else {
return classes;
}
});
retort.selector.grammar.id_regex = /(?:[\#])([a-zA-Z0-9\-]+)/;
retort.selector.grammar.tag__GT_id = (function retort$selector$grammar$tag__GT_id(tag){
return cljs.core.second.call(null,cljs.core.re_find.call(null,retort.selector.grammar.id_regex,cljs.core.name.call(null,tag)));
});
retort.selector.grammar.ancesotry_regex = /([^\>])\>|([^\>]+)/;
retort.selector.grammar.interpret_single = (function retort$selector$grammar$interpret_single(selector){
var func = retort.selector.grammar.tag__GT_function_tag.call(null,selector);
var tag = retort.selector.grammar.tag__GT_html_tag.call(null,selector);
var id = retort.selector.grammar.tag__GT_id.call(null,selector);
var classes = retort.selector.grammar.tag__GT_class_set.call(null,selector);
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var and__4120__auto__ = func;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [func], null)], null);
} else {
return and__4120__auto__;
}
})(),(function (){var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null)], null);
} else {
return and__4120__auto__;
}
})(),(function (){var and__4120__auto__ = id;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null);
} else {
return and__4120__auto__;
}
})(),(function (){var and__4120__auto__ = classes;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classes], null)], null);
} else {
return and__4120__auto__;
}
})());
});
retort.selector.grammar.ancestory = (function retort$selector$grammar$ancestory(selector){
return cljs.core.map.call(null,(function (p__3565){
var vec__3566 = p__3565;
var _ = cljs.core.nth.call(null,vec__3566,(0),null);
var x = cljs.core.nth.call(null,vec__3566,(1),null);
var y = cljs.core.nth.call(null,vec__3566,(2),null);
var or__4131__auto__ = x;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return y;
}
}),cljs.core.re_seq.call(null,retort.selector.grammar.ancesotry_regex,cljs.core.name.call(null,selector)));
});
retort.selector.grammar.interpret = (function retort$selector$grammar$interpret(selector){
var ancestors = cljs.core.map.call(null,retort.selector.grammar.interpret_single,retort.selector.grammar.ancestory.call(null,selector));
return cljs.core.reduce.call(null,((function (ancestors){
return (function (parent,child){
return cljs.core.assoc.call(null,child,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent], null));
});})(ancestors))
,ancestors);
});

//# sourceMappingURL=grammar.js.map

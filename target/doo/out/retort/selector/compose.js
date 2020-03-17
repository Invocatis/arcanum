// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.selector.compose');
goog.require('cljs.core');
goog.require('retort.selector.grammar');
retort.selector.compose.compose_BAR_map = (function retort$selector$compose$compose_BAR_map(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null)], null);
});
retort.selector.compose.compose_BAR_vector = (function retort$selector$compose$compose_BAR_vector(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,v),cljs.core.subvec.call(null,v,(1))], null);
});
retort.selector.compose.compose_BAR_keyword = (function retort$selector$compose$compose_BAR_keyword(element){
return retort.selector.grammar.interpret.call(null,element);
});
retort.selector.compose.compose_BAR_element = (function retort$selector$compose$compose_BAR_element(element){
if(cljs.core.map_QMARK_.call(null,element)){
return retort.selector.compose.compose_BAR_map.call(null,element);
} else {
if(cljs.core.vector_QMARK_.call(null,element)){
return retort.selector.compose.compose_BAR_vector.call(null,element);
} else {
if((element instanceof cljs.core.Keyword)){
return retort.selector.compose.compose_BAR_keyword.call(null,element);
} else {
return null;
}
}
}
});
retort.selector.compose.compose = (function retort$selector$compose$compose(selector){
var selector__$1 = ((cljs.core.vector_QMARK_.call(null,selector))?selector:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null));
var comp = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,selector__$1)){
return comp;
} else {
var G__3571 = cljs.core.rest.call(null,selector__$1);
var G__3572 = cljs.core.conj.call(null,comp,retort.selector.compose.compose_BAR_element.call(null,cljs.core.first.call(null,selector__$1)));
selector__$1 = G__3571;
comp = G__3572;
continue;
}
break;
}
});

//# sourceMappingURL=compose.js.map

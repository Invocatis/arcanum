// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.component.select');
goog.require('cljs.core');
goog.require('arcanum.module');
goog.require('arcanum.hiccup');
arcanum.component.select.design = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mold","mold",-1514698660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".select",".select",1038294689),(function (p__6424){
var vec__6425 = p__6424;
var seq__6426 = cljs.core.seq.call(null,vec__6425);
var first__6427 = cljs.core.first.call(null,seq__6426);
var seq__6426__$1 = cljs.core.next.call(null,seq__6426);
var tag = first__6427;
var first__6427__$1 = cljs.core.first.call(null,seq__6426__$1);
var seq__6426__$2 = cljs.core.next.call(null,seq__6426__$1);
var map__6428 = first__6427__$1;
var map__6428__$1 = (((((!((map__6428 == null))))?(((((map__6428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6428):map__6428);
var attrs = map__6428__$1;
var select = cljs.core.get.call(null,map__6428__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var children = seq__6426__$2;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null),cljs.core.map.call(null,((function (vec__6425,seq__6426,first__6427,seq__6426__$1,tag,first__6427__$1,seq__6426__$2,map__6428,map__6428__$1,attrs,select,children){
return (function (p1__6423_SHARP_){
return arcanum.hiccup.attr_assoc.call(null,p1__6423_SHARP_,new cljs.core.Keyword(null,"select","select",1147833503),select);
});})(vec__6425,seq__6426,first__6427,seq__6426__$1,tag,first__6427__$1,seq__6426__$2,map__6428,map__6428__$1,attrs,select,children))
,children));
})], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".option",".option",-31944368),(function (p__6430){
var map__6431 = p__6430;
var map__6431__$1 = (((((!((map__6431 == null))))?(((((map__6431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6431):map__6431);
var select = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var value = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(arcanum.module.call_BANG_.call(null,select,new cljs.core.Keyword(null,"selected?","selected?",-742502788),value))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),"selected"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),"unselected"], null);
}
})], null),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"button.option","button.option",-847735157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p__6433){
var map__6434 = p__6433;
var map__6434__$1 = (((((!((map__6434 == null))))?(((((map__6434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6434):map__6434);
var select = cljs.core.get.call(null,map__6434__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var value = cljs.core.get.call(null,map__6434__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(arcanum.module.call_BANG_.call(null,select,new cljs.core.Keyword(null,"selected?","selected?",-742502788),value))){
return arcanum.module.call_BANG_.call(null,select,new cljs.core.Keyword(null,"unselect","unselect",-1124322706),value);
} else {
return arcanum.module.call_BANG_.call(null,select,new cljs.core.Keyword(null,"select","select",1147833503),value);
}
})], null)], null)], null);
arcanum.component.select.component = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"design","design",1241338903),arcanum.component.select.design], null);

//# sourceMappingURL=select.js.map

// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.component.panel');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('garden.selectors');
goog.require('arcanum.module');
arcanum.component.panel.style = garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel",".panel",-762539964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.attr_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"close","close",1835149582))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null)], null));
arcanum.component.panel.design = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".panel",".panel",-762539964),(function (p__6444){
var map__6445 = p__6444;
var map__6445__$1 = (((((!((map__6445 == null))))?(((((map__6445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6445):map__6445);
var params = map__6445__$1;
var toggle = cljs.core.get.call(null,map__6445__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),arcanum.module.call_BANG_.call(null,toggle,new cljs.core.Keyword(null,"value","value",305978217))], null);
})], null)], null);
arcanum.component.panel.component = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"design","design",1241338903),arcanum.component.panel.design,new cljs.core.Keyword(null,"style","style",-496642736),arcanum.component.panel.style], null);

//# sourceMappingURL=panel.js.map

// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.component.background');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('garden.selectors');
goog.require('arcanum.module');
arcanum.component.background.style = garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background",".background",-500133012),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null));
arcanum.component.background.design = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".background",".background",-500133012),(function (p__6411){
var map__6412 = p__6411;
var map__6412__$1 = (((((!((map__6412 == null))))?(((((map__6412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6412):map__6412);
var toggle = cljs.core.get.call(null,map__6412__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),arcanum.module.call_BANG_.call(null,toggle,new cljs.core.Keyword(null,"get","get",1683182755))], null);
})], null),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,".background",".background",-500133012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__6408_SHARP_){
return arcanum.module.call_BANG_.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030).cljs$core$IFn$_invoke$arity$1(p1__6408_SHARP_),new cljs.core.Keyword(null,"toggle","toggle",1291842030));
})], null),new cljs.core.Keyword(null,".background>*",".background>*",-433740852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__6410_SHARP_,p2__6409_SHARP_){
return p2__6409_SHARP_.stopPropagation();
})], null)], null)], null);
arcanum.component.background.component = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"design","design",1241338903),arcanum.component.background.design,new cljs.core.Keyword(null,"style","style",-496642736),arcanum.component.background.style], null);

//# sourceMappingURL=background.js.map

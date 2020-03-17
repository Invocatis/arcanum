// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.component.flipmove');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('retort.hiccup');
arcanum.component.flipmove.node$module$react_flip_move = require('react-flip-move');
arcanum.component.flipmove.adapted = reagent.core.adapt_react_class.call(null,arcanum.component.flipmove.node$module$react_flip_move);
arcanum.component.flipmove.design = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mold","mold",-1514698660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flipmove","flipmove",-1189755278),(function (hiccup){
var vec__6416 = retort.hiccup.strip_tag.call(null,hiccup);
var seq__6417 = cljs.core.seq.call(null,vec__6416);
var first__6418 = cljs.core.first.call(null,seq__6417);
var seq__6417__$1 = cljs.core.next.call(null,seq__6417);
var tag = first__6418;
var rest = seq__6417__$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arcanum.component.flipmove.adapted], null),rest);
})], null)], null);
arcanum.component.flipmove.component = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"design","design",1241338903),arcanum.component.flipmove.design], null);

//# sourceMappingURL=flipmove.js.map

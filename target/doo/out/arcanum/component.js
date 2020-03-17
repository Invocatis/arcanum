// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.component');
goog.require('cljs.core');
goog.require('retort.core');
arcanum.component.components = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
arcanum.component.register_BANG_ = (function arcanum$component$register_BANG_(component,id){
return cljs.core.swap_BANG_.call(null,arcanum.component.components,cljs.core.assoc,id,component);
});
arcanum.component.design = (function arcanum$component$design(){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"design","design",1241338903),cljs.core.vals.call(null,cljs.core.deref.call(null,arcanum.component.components))));
});
arcanum.component.style = (function arcanum$component$style(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map.call(null,(function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),s], null);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.vals.call(null,cljs.core.deref.call(null,arcanum.component.components)))));
});

//# sourceMappingURL=component.js.map

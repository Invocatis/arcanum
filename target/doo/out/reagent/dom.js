// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__6268 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6269 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6269;

try{return reagent.dom.node$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__6268,_STAR_always_update_STAR__temp_val__6269){
return (function (){
var _STAR_always_update_STAR__orig_val__6270 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6271 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6271;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6270;
}});})(_STAR_always_update_STAR__orig_val__6268,_STAR_always_update_STAR__temp_val__6269))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6268;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__6273 = arguments.length;
switch (G__6273) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__6275_6279 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__6276_6280 = null;
var count__6277_6281 = (0);
var i__6278_6282 = (0);
while(true){
if((i__6278_6282 < count__6277_6281)){
var v_6283 = cljs.core._nth.call(null,chunk__6276_6280,i__6278_6282);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6283);


var G__6284 = seq__6275_6279;
var G__6285 = chunk__6276_6280;
var G__6286 = count__6277_6281;
var G__6287 = (i__6278_6282 + (1));
seq__6275_6279 = G__6284;
chunk__6276_6280 = G__6285;
count__6277_6281 = G__6286;
i__6278_6282 = G__6287;
continue;
} else {
var temp__5720__auto___6288 = cljs.core.seq.call(null,seq__6275_6279);
if(temp__5720__auto___6288){
var seq__6275_6289__$1 = temp__5720__auto___6288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6275_6289__$1)){
var c__4550__auto___6290 = cljs.core.chunk_first.call(null,seq__6275_6289__$1);
var G__6291 = cljs.core.chunk_rest.call(null,seq__6275_6289__$1);
var G__6292 = c__4550__auto___6290;
var G__6293 = cljs.core.count.call(null,c__4550__auto___6290);
var G__6294 = (0);
seq__6275_6279 = G__6291;
chunk__6276_6280 = G__6292;
count__6277_6281 = G__6293;
i__6278_6282 = G__6294;
continue;
} else {
var v_6295 = cljs.core.first.call(null,seq__6275_6289__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_6295);


var G__6296 = cljs.core.next.call(null,seq__6275_6289__$1);
var G__6297 = null;
var G__6298 = (0);
var G__6299 = (0);
seq__6275_6279 = G__6296;
chunk__6276_6280 = G__6297;
count__6277_6281 = G__6298;
i__6278_6282 = G__6299;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map

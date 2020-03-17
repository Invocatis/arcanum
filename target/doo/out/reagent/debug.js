// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3448__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3449__i = 0, G__3449__a = new Array(arguments.length -  0);
while (G__3449__i < G__3449__a.length) {G__3449__a[G__3449__i] = arguments[G__3449__i + 0]; ++G__3449__i;}
  args = new cljs.core.IndexedSeq(G__3449__a,0,null);
} 
return G__3448__delegate.call(this,args);};
G__3448.cljs$lang$maxFixedArity = 0;
G__3448.cljs$lang$applyTo = (function (arglist__3450){
var args = cljs.core.seq(arglist__3450);
return G__3448__delegate(args);
});
G__3448.cljs$core$IFn$_invoke$arity$variadic = G__3448__delegate;
return G__3448;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3451__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3452__i = 0, G__3452__a = new Array(arguments.length -  0);
while (G__3452__i < G__3452__a.length) {G__3452__a[G__3452__i] = arguments[G__3452__i + 0]; ++G__3452__i;}
  args = new cljs.core.IndexedSeq(G__3452__a,0,null);
} 
return G__3451__delegate.call(this,args);};
G__3451.cljs$lang$maxFixedArity = 0;
G__3451.cljs$lang$applyTo = (function (arglist__3453){
var args = cljs.core.seq(arglist__3453);
return G__3451__delegate(args);
});
G__3451.cljs$core$IFn$_invoke$arity$variadic = G__3451__delegate;
return G__3451;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map

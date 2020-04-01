goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2261__i = 0, G__2261__a = new Array(arguments.length -  0);
while (G__2261__i < G__2261__a.length) {G__2261__a[G__2261__i] = arguments[G__2261__i + 0]; ++G__2261__i;}
  args = new cljs.core.IndexedSeq(G__2261__a,0,null);
} 
return G__2260__delegate.call(this,args);};
G__2260.cljs$lang$maxFixedArity = 0;
G__2260.cljs$lang$applyTo = (function (arglist__2262){
var args = cljs.core.seq(arglist__2262);
return G__2260__delegate(args);
});
G__2260.cljs$core$IFn$_invoke$arity$variadic = G__2260__delegate;
return G__2260;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2264__i = 0, G__2264__a = new Array(arguments.length -  0);
while (G__2264__i < G__2264__a.length) {G__2264__a[G__2264__i] = arguments[G__2264__i + 0]; ++G__2264__i;}
  args = new cljs.core.IndexedSeq(G__2264__a,0,null);
} 
return G__2263__delegate.call(this,args);};
G__2263.cljs$lang$maxFixedArity = 0;
G__2263.cljs$lang$applyTo = (function (arglist__2265){
var args = cljs.core.seq(arglist__2265);
return G__2263__delegate(args);
});
G__2263.cljs$core$IFn$_invoke$arity$variadic = G__2263__delegate;
return G__2263;
})()
);

return null;
});

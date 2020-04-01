goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2290__i = 0, G__2290__a = new Array(arguments.length -  0);
while (G__2290__i < G__2290__a.length) {G__2290__a[G__2290__i] = arguments[G__2290__i + 0]; ++G__2290__i;}
  args = new cljs.core.IndexedSeq(G__2290__a,0,null);
} 
return G__2289__delegate.call(this,args);};
G__2289.cljs$lang$maxFixedArity = 0;
G__2289.cljs$lang$applyTo = (function (arglist__2291){
var args = cljs.core.seq(arglist__2291);
return G__2289__delegate(args);
});
G__2289.cljs$core$IFn$_invoke$arity$variadic = G__2289__delegate;
return G__2289;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2293__i = 0, G__2293__a = new Array(arguments.length -  0);
while (G__2293__i < G__2293__a.length) {G__2293__a[G__2293__i] = arguments[G__2293__i + 0]; ++G__2293__i;}
  args = new cljs.core.IndexedSeq(G__2293__a,0,null);
} 
return G__2292__delegate.call(this,args);};
G__2292.cljs$lang$maxFixedArity = 0;
G__2292.cljs$lang$applyTo = (function (arglist__2294){
var args = cljs.core.seq(arglist__2294);
return G__2292__delegate(args);
});
G__2292.cljs$core$IFn$_invoke$arity$variadic = G__2292__delegate;
return G__2292;
})()
);

return null;
});

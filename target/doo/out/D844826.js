goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2364__i = 0, G__2364__a = new Array(arguments.length -  0);
while (G__2364__i < G__2364__a.length) {G__2364__a[G__2364__i] = arguments[G__2364__i + 0]; ++G__2364__i;}
  args = new cljs.core.IndexedSeq(G__2364__a,0,null);
} 
return G__2363__delegate.call(this,args);};
G__2363.cljs$lang$maxFixedArity = 0;
G__2363.cljs$lang$applyTo = (function (arglist__2365){
var args = cljs.core.seq(arglist__2365);
return G__2363__delegate(args);
});
G__2363.cljs$core$IFn$_invoke$arity$variadic = G__2363__delegate;
return G__2363;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2367__i = 0, G__2367__a = new Array(arguments.length -  0);
while (G__2367__i < G__2367__a.length) {G__2367__a[G__2367__i] = arguments[G__2367__i + 0]; ++G__2367__i;}
  args = new cljs.core.IndexedSeq(G__2367__a,0,null);
} 
return G__2366__delegate.call(this,args);};
G__2366.cljs$lang$maxFixedArity = 0;
G__2366.cljs$lang$applyTo = (function (arglist__2368){
var args = cljs.core.seq(arglist__2368);
return G__2366__delegate(args);
});
G__2366.cljs$core$IFn$_invoke$arity$variadic = G__2366__delegate;
return G__2366;
})()
);

return null;
});

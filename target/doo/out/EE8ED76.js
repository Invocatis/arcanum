goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2231__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2232__i = 0, G__2232__a = new Array(arguments.length -  0);
while (G__2232__i < G__2232__a.length) {G__2232__a[G__2232__i] = arguments[G__2232__i + 0]; ++G__2232__i;}
  args = new cljs.core.IndexedSeq(G__2232__a,0,null);
} 
return G__2231__delegate.call(this,args);};
G__2231.cljs$lang$maxFixedArity = 0;
G__2231.cljs$lang$applyTo = (function (arglist__2233){
var args = cljs.core.seq(arglist__2233);
return G__2231__delegate(args);
});
G__2231.cljs$core$IFn$_invoke$arity$variadic = G__2231__delegate;
return G__2231;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2234__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2235__i = 0, G__2235__a = new Array(arguments.length -  0);
while (G__2235__i < G__2235__a.length) {G__2235__a[G__2235__i] = arguments[G__2235__i + 0]; ++G__2235__i;}
  args = new cljs.core.IndexedSeq(G__2235__a,0,null);
} 
return G__2234__delegate.call(this,args);};
G__2234.cljs$lang$maxFixedArity = 0;
G__2234.cljs$lang$applyTo = (function (arglist__2236){
var args = cljs.core.seq(arglist__2236);
return G__2234__delegate(args);
});
G__2234.cljs$core$IFn$_invoke$arity$variadic = G__2234__delegate;
return G__2234;
})()
);

return null;
});

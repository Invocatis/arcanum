goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4911__i = 0, G__4911__a = new Array(arguments.length -  0);
while (G__4911__i < G__4911__a.length) {G__4911__a[G__4911__i] = arguments[G__4911__i + 0]; ++G__4911__i;}
  args = new cljs.core.IndexedSeq(G__4911__a,0,null);
} 
return G__4910__delegate.call(this,args);};
G__4910.cljs$lang$maxFixedArity = 0;
G__4910.cljs$lang$applyTo = (function (arglist__4912){
var args = cljs.core.seq(arglist__4912);
return G__4910__delegate(args);
});
G__4910.cljs$core$IFn$_invoke$arity$variadic = G__4910__delegate;
return G__4910;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4914__i = 0, G__4914__a = new Array(arguments.length -  0);
while (G__4914__i < G__4914__a.length) {G__4914__a[G__4914__i] = arguments[G__4914__i + 0]; ++G__4914__i;}
  args = new cljs.core.IndexedSeq(G__4914__a,0,null);
} 
return G__4913__delegate.call(this,args);};
G__4913.cljs$lang$maxFixedArity = 0;
G__4913.cljs$lang$applyTo = (function (arglist__4915){
var args = cljs.core.seq(arglist__4915);
return G__4913__delegate(args);
});
G__4913.cljs$core$IFn$_invoke$arity$variadic = G__4913__delegate;
return G__4913;
})()
);

return null;
});

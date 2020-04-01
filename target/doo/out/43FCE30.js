goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5031__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5032__i = 0, G__5032__a = new Array(arguments.length -  0);
while (G__5032__i < G__5032__a.length) {G__5032__a[G__5032__i] = arguments[G__5032__i + 0]; ++G__5032__i;}
  args = new cljs.core.IndexedSeq(G__5032__a,0,null);
} 
return G__5031__delegate.call(this,args);};
G__5031.cljs$lang$maxFixedArity = 0;
G__5031.cljs$lang$applyTo = (function (arglist__5033){
var args = cljs.core.seq(arglist__5033);
return G__5031__delegate(args);
});
G__5031.cljs$core$IFn$_invoke$arity$variadic = G__5031__delegate;
return G__5031;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5034__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5035__i = 0, G__5035__a = new Array(arguments.length -  0);
while (G__5035__i < G__5035__a.length) {G__5035__a[G__5035__i] = arguments[G__5035__i + 0]; ++G__5035__i;}
  args = new cljs.core.IndexedSeq(G__5035__a,0,null);
} 
return G__5034__delegate.call(this,args);};
G__5034.cljs$lang$maxFixedArity = 0;
G__5034.cljs$lang$applyTo = (function (arglist__5036){
var args = cljs.core.seq(arglist__5036);
return G__5034__delegate(args);
});
G__5034.cljs$core$IFn$_invoke$arity$variadic = G__5034__delegate;
return G__5034;
})()
);

return null;
});

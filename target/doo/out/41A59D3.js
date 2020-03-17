goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__6557__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6558__i = 0, G__6558__a = new Array(arguments.length -  0);
while (G__6558__i < G__6558__a.length) {G__6558__a[G__6558__i] = arguments[G__6558__i + 0]; ++G__6558__i;}
  args = new cljs.core.IndexedSeq(G__6558__a,0,null);
} 
return G__6557__delegate.call(this,args);};
G__6557.cljs$lang$maxFixedArity = 0;
G__6557.cljs$lang$applyTo = (function (arglist__6559){
var args = cljs.core.seq(arglist__6559);
return G__6557__delegate(args);
});
G__6557.cljs$core$IFn$_invoke$arity$variadic = G__6557__delegate;
return G__6557;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__6560__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6561__i = 0, G__6561__a = new Array(arguments.length -  0);
while (G__6561__i < G__6561__a.length) {G__6561__a[G__6561__i] = arguments[G__6561__i + 0]; ++G__6561__i;}
  args = new cljs.core.IndexedSeq(G__6561__a,0,null);
} 
return G__6560__delegate.call(this,args);};
G__6560.cljs$lang$maxFixedArity = 0;
G__6560.cljs$lang$applyTo = (function (arglist__6562){
var args = cljs.core.seq(arglist__6562);
return G__6560__delegate(args);
});
G__6560.cljs$core$IFn$_invoke$arity$variadic = G__6560__delegate;
return G__6560;
})()
);

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2203__i = 0, G__2203__a = new Array(arguments.length -  0);
while (G__2203__i < G__2203__a.length) {G__2203__a[G__2203__i] = arguments[G__2203__i + 0]; ++G__2203__i;}
  args = new cljs.core.IndexedSeq(G__2203__a,0,null);
} 
return G__2202__delegate.call(this,args);};
G__2202.cljs$lang$maxFixedArity = 0;
G__2202.cljs$lang$applyTo = (function (arglist__2204){
var args = cljs.core.seq(arglist__2204);
return G__2202__delegate(args);
});
G__2202.cljs$core$IFn$_invoke$arity$variadic = G__2202__delegate;
return G__2202;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2206__i = 0, G__2206__a = new Array(arguments.length -  0);
while (G__2206__i < G__2206__a.length) {G__2206__a[G__2206__i] = arguments[G__2206__i + 0]; ++G__2206__i;}
  args = new cljs.core.IndexedSeq(G__2206__a,0,null);
} 
return G__2205__delegate.call(this,args);};
G__2205.cljs$lang$maxFixedArity = 0;
G__2205.cljs$lang$applyTo = (function (arglist__2207){
var args = cljs.core.seq(arglist__2207);
return G__2205__delegate(args);
});
G__2205.cljs$core$IFn$_invoke$arity$variadic = G__2205__delegate;
return G__2205;
})()
);

return null;
});

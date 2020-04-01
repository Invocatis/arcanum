goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4802__i = 0, G__4802__a = new Array(arguments.length -  0);
while (G__4802__i < G__4802__a.length) {G__4802__a[G__4802__i] = arguments[G__4802__i + 0]; ++G__4802__i;}
  args = new cljs.core.IndexedSeq(G__4802__a,0,null);
} 
return G__4801__delegate.call(this,args);};
G__4801.cljs$lang$maxFixedArity = 0;
G__4801.cljs$lang$applyTo = (function (arglist__4803){
var args = cljs.core.seq(arglist__4803);
return G__4801__delegate(args);
});
G__4801.cljs$core$IFn$_invoke$arity$variadic = G__4801__delegate;
return G__4801;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4805__i = 0, G__4805__a = new Array(arguments.length -  0);
while (G__4805__i < G__4805__a.length) {G__4805__a[G__4805__i] = arguments[G__4805__i + 0]; ++G__4805__i;}
  args = new cljs.core.IndexedSeq(G__4805__a,0,null);
} 
return G__4804__delegate.call(this,args);};
G__4804.cljs$lang$maxFixedArity = 0;
G__4804.cljs$lang$applyTo = (function (arglist__4806){
var args = cljs.core.seq(arglist__4806);
return G__4804__delegate(args);
});
G__4804.cljs$core$IFn$_invoke$arity$variadic = G__4804__delegate;
return G__4804;
})()
);

return null;
});

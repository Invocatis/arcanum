goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4669__i = 0, G__4669__a = new Array(arguments.length -  0);
while (G__4669__i < G__4669__a.length) {G__4669__a[G__4669__i] = arguments[G__4669__i + 0]; ++G__4669__i;}
  args = new cljs.core.IndexedSeq(G__4669__a,0,null);
} 
return G__4668__delegate.call(this,args);};
G__4668.cljs$lang$maxFixedArity = 0;
G__4668.cljs$lang$applyTo = (function (arglist__4670){
var args = cljs.core.seq(arglist__4670);
return G__4668__delegate(args);
});
G__4668.cljs$core$IFn$_invoke$arity$variadic = G__4668__delegate;
return G__4668;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4672__i = 0, G__4672__a = new Array(arguments.length -  0);
while (G__4672__i < G__4672__a.length) {G__4672__a[G__4672__i] = arguments[G__4672__i + 0]; ++G__4672__i;}
  args = new cljs.core.IndexedSeq(G__4672__a,0,null);
} 
return G__4671__delegate.call(this,args);};
G__4671.cljs$lang$maxFixedArity = 0;
G__4671.cljs$lang$applyTo = (function (arglist__4673){
var args = cljs.core.seq(arglist__4673);
return G__4671__delegate(args);
});
G__4671.cljs$core$IFn$_invoke$arity$variadic = G__4671__delegate;
return G__4671;
})()
);

return null;
});

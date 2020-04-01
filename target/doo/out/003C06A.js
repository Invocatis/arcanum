goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5014__i = 0, G__5014__a = new Array(arguments.length -  0);
while (G__5014__i < G__5014__a.length) {G__5014__a[G__5014__i] = arguments[G__5014__i + 0]; ++G__5014__i;}
  args = new cljs.core.IndexedSeq(G__5014__a,0,null);
} 
return G__5013__delegate.call(this,args);};
G__5013.cljs$lang$maxFixedArity = 0;
G__5013.cljs$lang$applyTo = (function (arglist__5015){
var args = cljs.core.seq(arglist__5015);
return G__5013__delegate(args);
});
G__5013.cljs$core$IFn$_invoke$arity$variadic = G__5013__delegate;
return G__5013;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5017__i = 0, G__5017__a = new Array(arguments.length -  0);
while (G__5017__i < G__5017__a.length) {G__5017__a[G__5017__i] = arguments[G__5017__i + 0]; ++G__5017__i;}
  args = new cljs.core.IndexedSeq(G__5017__a,0,null);
} 
return G__5016__delegate.call(this,args);};
G__5016.cljs$lang$maxFixedArity = 0;
G__5016.cljs$lang$applyTo = (function (arglist__5018){
var args = cljs.core.seq(arglist__5018);
return G__5016__delegate(args);
});
G__5016.cljs$core$IFn$_invoke$arity$variadic = G__5016__delegate;
return G__5016;
})()
);

return null;
});

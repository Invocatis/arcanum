goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4673__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4674__i = 0, G__4674__a = new Array(arguments.length -  0);
while (G__4674__i < G__4674__a.length) {G__4674__a[G__4674__i] = arguments[G__4674__i + 0]; ++G__4674__i;}
  args = new cljs.core.IndexedSeq(G__4674__a,0,null);
} 
return G__4673__delegate.call(this,args);};
G__4673.cljs$lang$maxFixedArity = 0;
G__4673.cljs$lang$applyTo = (function (arglist__4675){
var args = cljs.core.seq(arglist__4675);
return G__4673__delegate(args);
});
G__4673.cljs$core$IFn$_invoke$arity$variadic = G__4673__delegate;
return G__4673;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4676__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4677__i = 0, G__4677__a = new Array(arguments.length -  0);
while (G__4677__i < G__4677__a.length) {G__4677__a[G__4677__i] = arguments[G__4677__i + 0]; ++G__4677__i;}
  args = new cljs.core.IndexedSeq(G__4677__a,0,null);
} 
return G__4676__delegate.call(this,args);};
G__4676.cljs$lang$maxFixedArity = 0;
G__4676.cljs$lang$applyTo = (function (arglist__4678){
var args = cljs.core.seq(arglist__4678);
return G__4676__delegate(args);
});
G__4676.cljs$core$IFn$_invoke$arity$variadic = G__4676__delegate;
return G__4676;
})()
);

return null;
});

goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4761__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4762__i = 0, G__4762__a = new Array(arguments.length -  0);
while (G__4762__i < G__4762__a.length) {G__4762__a[G__4762__i] = arguments[G__4762__i + 0]; ++G__4762__i;}
  args = new cljs.core.IndexedSeq(G__4762__a,0,null);
} 
return G__4761__delegate.call(this,args);};
G__4761.cljs$lang$maxFixedArity = 0;
G__4761.cljs$lang$applyTo = (function (arglist__4763){
var args = cljs.core.seq(arglist__4763);
return G__4761__delegate(args);
});
G__4761.cljs$core$IFn$_invoke$arity$variadic = G__4761__delegate;
return G__4761;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4764__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4765__i = 0, G__4765__a = new Array(arguments.length -  0);
while (G__4765__i < G__4765__a.length) {G__4765__a[G__4765__i] = arguments[G__4765__i + 0]; ++G__4765__i;}
  args = new cljs.core.IndexedSeq(G__4765__a,0,null);
} 
return G__4764__delegate.call(this,args);};
G__4764.cljs$lang$maxFixedArity = 0;
G__4764.cljs$lang$applyTo = (function (arglist__4766){
var args = cljs.core.seq(arglist__4766);
return G__4764__delegate(args);
});
G__4764.cljs$core$IFn$_invoke$arity$variadic = G__4764__delegate;
return G__4764;
})()
);

return null;
});

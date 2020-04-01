goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4701__i = 0, G__4701__a = new Array(arguments.length -  0);
while (G__4701__i < G__4701__a.length) {G__4701__a[G__4701__i] = arguments[G__4701__i + 0]; ++G__4701__i;}
  args = new cljs.core.IndexedSeq(G__4701__a,0,null);
} 
return G__4700__delegate.call(this,args);};
G__4700.cljs$lang$maxFixedArity = 0;
G__4700.cljs$lang$applyTo = (function (arglist__4702){
var args = cljs.core.seq(arglist__4702);
return G__4700__delegate(args);
});
G__4700.cljs$core$IFn$_invoke$arity$variadic = G__4700__delegate;
return G__4700;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4704__i = 0, G__4704__a = new Array(arguments.length -  0);
while (G__4704__i < G__4704__a.length) {G__4704__a[G__4704__i] = arguments[G__4704__i + 0]; ++G__4704__i;}
  args = new cljs.core.IndexedSeq(G__4704__a,0,null);
} 
return G__4703__delegate.call(this,args);};
G__4703.cljs$lang$maxFixedArity = 0;
G__4703.cljs$lang$applyTo = (function (arglist__4705){
var args = cljs.core.seq(arglist__4705);
return G__4703__delegate(args);
});
G__4703.cljs$core$IFn$_invoke$arity$variadic = G__4703__delegate;
return G__4703;
})()
);

return null;
});

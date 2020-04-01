goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4728__i = 0, G__4728__a = new Array(arguments.length -  0);
while (G__4728__i < G__4728__a.length) {G__4728__a[G__4728__i] = arguments[G__4728__i + 0]; ++G__4728__i;}
  args = new cljs.core.IndexedSeq(G__4728__a,0,null);
} 
return G__4727__delegate.call(this,args);};
G__4727.cljs$lang$maxFixedArity = 0;
G__4727.cljs$lang$applyTo = (function (arglist__4729){
var args = cljs.core.seq(arglist__4729);
return G__4727__delegate(args);
});
G__4727.cljs$core$IFn$_invoke$arity$variadic = G__4727__delegate;
return G__4727;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4731__i = 0, G__4731__a = new Array(arguments.length -  0);
while (G__4731__i < G__4731__a.length) {G__4731__a[G__4731__i] = arguments[G__4731__i + 0]; ++G__4731__i;}
  args = new cljs.core.IndexedSeq(G__4731__a,0,null);
} 
return G__4730__delegate.call(this,args);};
G__4730.cljs$lang$maxFixedArity = 0;
G__4730.cljs$lang$applyTo = (function (arglist__4732){
var args = cljs.core.seq(arglist__4732);
return G__4730__delegate(args);
});
G__4730.cljs$core$IFn$_invoke$arity$variadic = G__4730__delegate;
return G__4730;
})()
);

return null;
});

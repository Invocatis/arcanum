goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4817__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4818__i = 0, G__4818__a = new Array(arguments.length -  0);
while (G__4818__i < G__4818__a.length) {G__4818__a[G__4818__i] = arguments[G__4818__i + 0]; ++G__4818__i;}
  args = new cljs.core.IndexedSeq(G__4818__a,0,null);
} 
return G__4817__delegate.call(this,args);};
G__4817.cljs$lang$maxFixedArity = 0;
G__4817.cljs$lang$applyTo = (function (arglist__4819){
var args = cljs.core.seq(arglist__4819);
return G__4817__delegate(args);
});
G__4817.cljs$core$IFn$_invoke$arity$variadic = G__4817__delegate;
return G__4817;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4820__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4821__i = 0, G__4821__a = new Array(arguments.length -  0);
while (G__4821__i < G__4821__a.length) {G__4821__a[G__4821__i] = arguments[G__4821__i + 0]; ++G__4821__i;}
  args = new cljs.core.IndexedSeq(G__4821__a,0,null);
} 
return G__4820__delegate.call(this,args);};
G__4820.cljs$lang$maxFixedArity = 0;
G__4820.cljs$lang$applyTo = (function (arglist__4822){
var args = cljs.core.seq(arglist__4822);
return G__4820__delegate(args);
});
G__4820.cljs$core$IFn$_invoke$arity$variadic = G__4820__delegate;
return G__4820;
})()
);

return null;
});

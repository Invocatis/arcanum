goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5087__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5088__i = 0, G__5088__a = new Array(arguments.length -  0);
while (G__5088__i < G__5088__a.length) {G__5088__a[G__5088__i] = arguments[G__5088__i + 0]; ++G__5088__i;}
  args = new cljs.core.IndexedSeq(G__5088__a,0,null);
} 
return G__5087__delegate.call(this,args);};
G__5087.cljs$lang$maxFixedArity = 0;
G__5087.cljs$lang$applyTo = (function (arglist__5089){
var args = cljs.core.seq(arglist__5089);
return G__5087__delegate(args);
});
G__5087.cljs$core$IFn$_invoke$arity$variadic = G__5087__delegate;
return G__5087;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5090__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5091__i = 0, G__5091__a = new Array(arguments.length -  0);
while (G__5091__i < G__5091__a.length) {G__5091__a[G__5091__i] = arguments[G__5091__i + 0]; ++G__5091__i;}
  args = new cljs.core.IndexedSeq(G__5091__a,0,null);
} 
return G__5090__delegate.call(this,args);};
G__5090.cljs$lang$maxFixedArity = 0;
G__5090.cljs$lang$applyTo = (function (arglist__5092){
var args = cljs.core.seq(arglist__5092);
return G__5090__delegate(args);
});
G__5090.cljs$core$IFn$_invoke$arity$variadic = G__5090__delegate;
return G__5090;
})()
);

return null;
});

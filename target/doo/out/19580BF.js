goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4938__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4939__i = 0, G__4939__a = new Array(arguments.length -  0);
while (G__4939__i < G__4939__a.length) {G__4939__a[G__4939__i] = arguments[G__4939__i + 0]; ++G__4939__i;}
  args = new cljs.core.IndexedSeq(G__4939__a,0,null);
} 
return G__4938__delegate.call(this,args);};
G__4938.cljs$lang$maxFixedArity = 0;
G__4938.cljs$lang$applyTo = (function (arglist__4940){
var args = cljs.core.seq(arglist__4940);
return G__4938__delegate(args);
});
G__4938.cljs$core$IFn$_invoke$arity$variadic = G__4938__delegate;
return G__4938;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4941__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4942__i = 0, G__4942__a = new Array(arguments.length -  0);
while (G__4942__i < G__4942__a.length) {G__4942__a[G__4942__i] = arguments[G__4942__i + 0]; ++G__4942__i;}
  args = new cljs.core.IndexedSeq(G__4942__a,0,null);
} 
return G__4941__delegate.call(this,args);};
G__4941.cljs$lang$maxFixedArity = 0;
G__4941.cljs$lang$applyTo = (function (arglist__4943){
var args = cljs.core.seq(arglist__4943);
return G__4941__delegate(args);
});
G__4941.cljs$core$IFn$_invoke$arity$variadic = G__4941__delegate;
return G__4941;
})()
);

return null;
});

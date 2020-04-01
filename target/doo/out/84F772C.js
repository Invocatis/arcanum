goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4915__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4916__i = 0, G__4916__a = new Array(arguments.length -  0);
while (G__4916__i < G__4916__a.length) {G__4916__a[G__4916__i] = arguments[G__4916__i + 0]; ++G__4916__i;}
  args = new cljs.core.IndexedSeq(G__4916__a,0,null);
} 
return G__4915__delegate.call(this,args);};
G__4915.cljs$lang$maxFixedArity = 0;
G__4915.cljs$lang$applyTo = (function (arglist__4917){
var args = cljs.core.seq(arglist__4917);
return G__4915__delegate(args);
});
G__4915.cljs$core$IFn$_invoke$arity$variadic = G__4915__delegate;
return G__4915;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4918__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4919__i = 0, G__4919__a = new Array(arguments.length -  0);
while (G__4919__i < G__4919__a.length) {G__4919__a[G__4919__i] = arguments[G__4919__i + 0]; ++G__4919__i;}
  args = new cljs.core.IndexedSeq(G__4919__a,0,null);
} 
return G__4918__delegate.call(this,args);};
G__4918.cljs$lang$maxFixedArity = 0;
G__4918.cljs$lang$applyTo = (function (arglist__4920){
var args = cljs.core.seq(arglist__4920);
return G__4918__delegate(args);
});
G__4918.cljs$core$IFn$_invoke$arity$variadic = G__4918__delegate;
return G__4918;
})()
);

return null;
});

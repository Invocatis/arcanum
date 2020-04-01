goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4244__i = 0, G__4244__a = new Array(arguments.length -  0);
while (G__4244__i < G__4244__a.length) {G__4244__a[G__4244__i] = arguments[G__4244__i + 0]; ++G__4244__i;}
  args = new cljs.core.IndexedSeq(G__4244__a,0,null);
} 
return G__4243__delegate.call(this,args);};
G__4243.cljs$lang$maxFixedArity = 0;
G__4243.cljs$lang$applyTo = (function (arglist__4245){
var args = cljs.core.seq(arglist__4245);
return G__4243__delegate(args);
});
G__4243.cljs$core$IFn$_invoke$arity$variadic = G__4243__delegate;
return G__4243;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4247__i = 0, G__4247__a = new Array(arguments.length -  0);
while (G__4247__i < G__4247__a.length) {G__4247__a[G__4247__i] = arguments[G__4247__i + 0]; ++G__4247__i;}
  args = new cljs.core.IndexedSeq(G__4247__a,0,null);
} 
return G__4246__delegate.call(this,args);};
G__4246.cljs$lang$maxFixedArity = 0;
G__4246.cljs$lang$applyTo = (function (arglist__4248){
var args = cljs.core.seq(arglist__4248);
return G__4246__delegate(args);
});
G__4246.cljs$core$IFn$_invoke$arity$variadic = G__4246__delegate;
return G__4246;
})()
);

return null;
});

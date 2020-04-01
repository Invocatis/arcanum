goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4894__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4895__i = 0, G__4895__a = new Array(arguments.length -  0);
while (G__4895__i < G__4895__a.length) {G__4895__a[G__4895__i] = arguments[G__4895__i + 0]; ++G__4895__i;}
  args = new cljs.core.IndexedSeq(G__4895__a,0,null);
} 
return G__4894__delegate.call(this,args);};
G__4894.cljs$lang$maxFixedArity = 0;
G__4894.cljs$lang$applyTo = (function (arglist__4896){
var args = cljs.core.seq(arglist__4896);
return G__4894__delegate(args);
});
G__4894.cljs$core$IFn$_invoke$arity$variadic = G__4894__delegate;
return G__4894;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4897__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4898__i = 0, G__4898__a = new Array(arguments.length -  0);
while (G__4898__i < G__4898__a.length) {G__4898__a[G__4898__i] = arguments[G__4898__i + 0]; ++G__4898__i;}
  args = new cljs.core.IndexedSeq(G__4898__a,0,null);
} 
return G__4897__delegate.call(this,args);};
G__4897.cljs$lang$maxFixedArity = 0;
G__4897.cljs$lang$applyTo = (function (arglist__4899){
var args = cljs.core.seq(arglist__4899);
return G__4897__delegate(args);
});
G__4897.cljs$core$IFn$_invoke$arity$variadic = G__4897__delegate;
return G__4897;
})()
);

return null;
});

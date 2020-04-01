goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5004__i = 0, G__5004__a = new Array(arguments.length -  0);
while (G__5004__i < G__5004__a.length) {G__5004__a[G__5004__i] = arguments[G__5004__i + 0]; ++G__5004__i;}
  args = new cljs.core.IndexedSeq(G__5004__a,0,null);
} 
return G__5003__delegate.call(this,args);};
G__5003.cljs$lang$maxFixedArity = 0;
G__5003.cljs$lang$applyTo = (function (arglist__5005){
var args = cljs.core.seq(arglist__5005);
return G__5003__delegate(args);
});
G__5003.cljs$core$IFn$_invoke$arity$variadic = G__5003__delegate;
return G__5003;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5007__i = 0, G__5007__a = new Array(arguments.length -  0);
while (G__5007__i < G__5007__a.length) {G__5007__a[G__5007__i] = arguments[G__5007__i + 0]; ++G__5007__i;}
  args = new cljs.core.IndexedSeq(G__5007__a,0,null);
} 
return G__5006__delegate.call(this,args);};
G__5006.cljs$lang$maxFixedArity = 0;
G__5006.cljs$lang$applyTo = (function (arglist__5008){
var args = cljs.core.seq(arglist__5008);
return G__5006__delegate(args);
});
G__5006.cljs$core$IFn$_invoke$arity$variadic = G__5006__delegate;
return G__5006;
})()
);

return null;
});

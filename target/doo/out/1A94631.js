goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__5108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5109__i = 0, G__5109__a = new Array(arguments.length -  0);
while (G__5109__i < G__5109__a.length) {G__5109__a[G__5109__i] = arguments[G__5109__i + 0]; ++G__5109__i;}
  args = new cljs.core.IndexedSeq(G__5109__a,0,null);
} 
return G__5108__delegate.call(this,args);};
G__5108.cljs$lang$maxFixedArity = 0;
G__5108.cljs$lang$applyTo = (function (arglist__5110){
var args = cljs.core.seq(arglist__5110);
return G__5108__delegate(args);
});
G__5108.cljs$core$IFn$_invoke$arity$variadic = G__5108__delegate;
return G__5108;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__5111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5112__i = 0, G__5112__a = new Array(arguments.length -  0);
while (G__5112__i < G__5112__a.length) {G__5112__a[G__5112__i] = arguments[G__5112__i + 0]; ++G__5112__i;}
  args = new cljs.core.IndexedSeq(G__5112__a,0,null);
} 
return G__5111__delegate.call(this,args);};
G__5111.cljs$lang$maxFixedArity = 0;
G__5111.cljs$lang$applyTo = (function (arglist__5113){
var args = cljs.core.seq(arglist__5113);
return G__5111__delegate(args);
});
G__5111.cljs$core$IFn$_invoke$arity$variadic = G__5111__delegate;
return G__5111;
})()
);

return null;
});

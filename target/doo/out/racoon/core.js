// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('racoon.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('retort.core');
goog.require('arcanum.registrar');
goog.require('arcanum.component');
goog.require('arcanum.module');
goog.require('arcanum.css.animation');
goog.require('racoon.view.core');
racoon.core.base = (function racoon$core$base(){
return cljs.core.reduce.call(null,(function (acc,design){
return retort.core.brew.call(null,design,acc);
}),retort.core.brew.call(null,arcanum.module.design.call(null,reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null),arcanum.component.style.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),arcanum.css.animation.css], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [racoon.view.core.base,cljs.core.PersistentArrayMap.EMPTY], null)], null)),arcanum.component.design.call(null));
});
racoon.core.render = (function racoon$core$render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [racoon.core.base], null),document.getElementById("app"));
});
goog.exportSymbol('racoon.core.render', racoon.core.render);
racoon.core._main = (function racoon$core$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5060 = arguments.length;
var i__4731__auto___5061 = (0);
while(true){
if((i__4731__auto___5061 < len__4730__auto___5060)){
args__4736__auto__.push((arguments[i__4731__auto___5061]));

var G__5062 = (i__4731__auto___5061 + (1));
i__4731__auto___5061 = G__5062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return racoon.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

racoon.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return racoon.core.render.call(null);
});

racoon.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
racoon.core._main.cljs$lang$applyTo = (function (seq5059){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5059));
});


//# sourceMappingURL=core.js.map

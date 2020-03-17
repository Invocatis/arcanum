// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5274 = arguments.length;
var i__4731__auto___5275 = (0);
while(true){
if((i__4731__auto___5275 < len__4730__auto___5274)){
args__4736__auto__.push((arguments[i__4731__auto___5275]));

var G__5276 = (i__4731__auto___5275 + (1));
i__4731__auto___5275 = G__5276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__5277__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__5277 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__5278__i = 0, G__5278__a = new Array(arguments.length -  0);
while (G__5278__i < G__5278__a.length) {G__5278__a[G__5278__i] = arguments[G__5278__i + 0]; ++G__5278__i;}
  children = new cljs.core.IndexedSeq(G__5278__a,0,null);
} 
return G__5277__delegate.call(this,children);};
G__5277.cljs$lang$maxFixedArity = 0;
G__5277.cljs$lang$applyTo = (function (arglist__5279){
var children = cljs.core.seq(arglist__5279);
return G__5277__delegate(children);
});
G__5277.cljs$core$IFn$_invoke$arity$variadic = G__5277__delegate;
return G__5277;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq5272){
var G__5273 = cljs.core.first.call(null,seq5272);
var seq5272__$1 = cljs.core.next.call(null,seq5272);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5273,seq5272__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__5280__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__5280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5281__i = 0, G__5281__a = new Array(arguments.length -  0);
while (G__5281__i < G__5281__a.length) {G__5281__a[G__5281__i] = arguments[G__5281__i + 0]; ++G__5281__i;}
  args = new cljs.core.IndexedSeq(G__5281__a,0,null);
} 
return G__5280__delegate.call(this,args);};
G__5280.cljs$lang$maxFixedArity = 0;
G__5280.cljs$lang$applyTo = (function (arglist__5282){
var args = cljs.core.seq(arglist__5282);
return G__5280__delegate(args);
});
G__5280.cljs$core$IFn$_invoke$arity$variadic = G__5280__delegate;
return G__5280;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5284 = arguments.length;
var i__4731__auto___5285 = (0);
while(true){
if((i__4731__auto___5285 < len__4730__auto___5284)){
args__4736__auto__.push((arguments[i__4731__auto___5285]));

var G__5286 = (i__4731__auto___5285 + (1));
i__4731__auto___5285 = G__5286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq5283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5283));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__5290 = arguments.length;
switch (G__5290) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___5292 = arguments.length;
var i__4731__auto___5293 = (0);
while(true){
if((i__4731__auto___5293 < len__4730__auto___5292)){
args_arr__4751__auto__.push((arguments[i__4731__auto___5293]));

var G__5294 = (i__4731__auto___5293 + (1));
i__4731__auto___5293 = G__5294;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq5288){
var G__5289 = cljs.core.first.call(null,seq5288);
var seq5288__$1 = cljs.core.next.call(null,seq5288);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5289,seq5288__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5297 = arguments.length;
var i__4731__auto___5298 = (0);
while(true){
if((i__4731__auto___5298 < len__4730__auto___5297)){
args__4736__auto__.push((arguments[i__4731__auto___5298]));

var G__5299 = (i__4731__auto___5298 + (1));
i__4731__auto___5298 = G__5299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq5295){
var G__5296 = cljs.core.first.call(null,seq5295);
var seq5295__$1 = cljs.core.next.call(null,seq5295);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5296,seq5295__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5302 = arguments.length;
var i__4731__auto___5303 = (0);
while(true){
if((i__4731__auto___5303 < len__4730__auto___5302)){
args__4736__auto__.push((arguments[i__4731__auto___5303]));

var G__5304 = (i__4731__auto___5303 + (1));
i__4731__auto___5303 = G__5304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq5300){
var G__5301 = cljs.core.first.call(null,seq5300);
var seq5300__$1 = cljs.core.next.call(null,seq5300);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5301,seq5300__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5307 = arguments.length;
var i__4731__auto___5308 = (0);
while(true){
if((i__4731__auto___5308 < len__4730__auto___5307)){
args__4736__auto__.push((arguments[i__4731__auto___5308]));

var G__5309 = (i__4731__auto___5308 + (1));
i__4731__auto___5308 = G__5309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq5305){
var G__5306 = cljs.core.first.call(null,seq5305);
var seq5305__$1 = cljs.core.next.call(null,seq5305);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5306,seq5305__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map

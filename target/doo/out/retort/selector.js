// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.selector');
goog.require('cljs.core');
goog.require('retort.selector.compose');
goog.require('retort.hiccup');
goog.require('motif.core');
goog.require('clojure.string');

retort.selector.children_selects_QMARK_ = (function retort$selector$children_selects_QMARK_(hiccup,context,selector){
var children = retort.hiccup.children.call(null,hiccup);
var context__$1 = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"siblings","siblings",382285157),children);
return cljs.core.map_indexed.call(null,((function (children,context__$1){
return (function (i,child){
return retort.selector._selects_QMARK_.call(null,selector,child,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"position","position",-2011731912),i));
});})(children,context__$1))
,children);
});
retort.selector.fn_name = (function retort$selector$fn_name(f){
return cljs.core.last.call(null,clojure.string.split.call(null,(cljs.core.truth_(f)?f.name:null),/\$/));
});
retort.selector.func = (function retort$selector$func(p__3627,_,func){
var vec__3628 = p__3627;
var tag = cljs.core.nth.call(null,vec__3628,(0),null);
return ((cljs.core.fn_QMARK_.call(null,tag)) && (cljs.core._EQ_.call(null,cljs.core.name.call(null,func),retort.selector.fn_name.call(null,tag))));
});
retort.selector.tag = (function retort$selector$tag(hiccup,_,tag){
return cljs.core._EQ_.call(null,retort.hiccup.tag.call(null,hiccup),tag);
});
retort.selector.id = (function retort$selector$id(hiccup,_,id){
return cljs.core._EQ_.call(null,retort.hiccup.id.call(null,hiccup),id);
});
retort.selector.classes = (function retort$selector$classes(hiccup,_,classes){
return cljs.core.every_QMARK_.call(null,retort.hiccup.classes.call(null,hiccup),classes);
});
retort.selector.parent = (function retort$selector$parent(hiccup,p__3631,selector){
var map__3632 = p__3631;
var map__3632__$1 = (((((!((map__3632 == null))))?(((((map__3632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3632):map__3632);
var context = map__3632__$1;
var parent = cljs.core.get.call(null,map__3632__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var map__3634 = parent;
var map__3634__$1 = (((((!((map__3634 == null))))?(((((map__3634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3634):map__3634);
var ancestor_context = map__3634__$1;
var position = cljs.core.get.call(null,map__3634__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var siblings = cljs.core.get.call(null,map__3634__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
return retort.selector.selects_by_composed_QMARK_.call(null,selector,cljs.core.get.call(null,siblings,position),ancestor_context);
});
retort.selector.attributes = (function retort$selector$attributes(hiccup,_,attributes){
return motif.core.matches_QMARK_.call(null,attributes,retort.hiccup.attributes.call(null,hiccup));
});
retort.selector.first_child = (function retort$selector$first_child(hiccup,p__3636){
var map__3637 = p__3636;
var map__3637__$1 = (((((!((map__3637 == null))))?(((((map__3637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3637):map__3637);
var position = cljs.core.get.call(null,map__3637__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var siblings = cljs.core.get.call(null,map__3637__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
return cljs.core._EQ_.call(null,position,(0));
});
retort.selector.nth_child = (function retort$selector$nth_child(hiccup,p__3639,n){
var map__3640 = p__3639;
var map__3640__$1 = (((((!((map__3640 == null))))?(((((map__3640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3640):map__3640);
var position = cljs.core.get.call(null,map__3640__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core._EQ_.call(null,position,n);
});
retort.selector.nth_last_child = (function retort$selector$nth_last_child(hiccup,p__3642,n){
var map__3643 = p__3642;
var map__3643__$1 = (((((!((map__3643 == null))))?(((((map__3643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3643):map__3643);
var siblings = cljs.core.get.call(null,map__3643__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3643__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core._EQ_.call(null,position,((cljs.core.count.call(null,siblings) - (1)) - n));
});
retort.selector.last_child = (function retort$selector$last_child(hiccup,p__3645){
var map__3646 = p__3645;
var map__3646__$1 = (((((!((map__3646 == null))))?(((((map__3646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3646):map__3646);
var position = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var siblings = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
return cljs.core._EQ_.call(null,position,(cljs.core.count.call(null,siblings) - (1)));
});
retort.selector.nth_child_of_type = (function retort$selector$nth_child_of_type(hiccup,p__3650,n,selector){
var map__3651 = p__3650;
var map__3651__$1 = (((((!((map__3651 == null))))?(((((map__3651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3651):map__3651);
var context = map__3651__$1;
var siblings = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var and__4120__auto__ = retort.selector._selects_QMARK_.call(null,selector,hiccup,context);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,n,cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (and__4120__auto__,map__3651,map__3651__$1,context,siblings,position){
return (function (p1__3649_SHARP_,p2__3648_SHARP_){
return retort.selector._selects_QMARK_.call(null,selector,p2__3648_SHARP_,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),p1__3649_SHARP_));
});})(and__4120__auto__,map__3651,map__3651__$1,context,siblings,position))
,cljs.core.take.call(null,position,siblings)))));
} else {
return and__4120__auto__;
}
});
retort.selector.nth_last_of_type = (function retort$selector$nth_last_of_type(hiccup,p__3655,n,selector){
var map__3656 = p__3655;
var map__3656__$1 = (((((!((map__3656 == null))))?(((((map__3656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3656):map__3656);
var context = map__3656__$1;
var siblings = cljs.core.get.call(null,map__3656__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3656__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var and__4120__auto__ = retort.selector._selects_QMARK_.call(null,selector,hiccup,context);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,n,cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (and__4120__auto__,map__3656,map__3656__$1,context,siblings,position){
return (function (p1__3654_SHARP_,p2__3653_SHARP_){
return retort.selector._selects_QMARK_.call(null,selector,p2__3653_SHARP_,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),p1__3654_SHARP_));
});})(and__4120__auto__,map__3656,map__3656__$1,context,siblings,position))
,cljs.core.drop.call(null,(position + (1)),siblings)))));
} else {
return and__4120__auto__;
}
});
retort.selector.first_child_of_type = (function retort$selector$first_child_of_type(hiccup,p__3659,selector){
var map__3660 = p__3659;
var map__3660__$1 = (((((!((map__3660 == null))))?(((((map__3660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3660):map__3660);
var context = map__3660__$1;
var position = cljs.core.get.call(null,map__3660__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var siblings = cljs.core.get.call(null,map__3660__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var and__4120__auto__ = retort.selector._selects_QMARK_.call(null,selector,hiccup,context);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.not,cljs.core.map.call(null,((function (and__4120__auto__,map__3660,map__3660__$1,context,position,siblings){
return (function (p1__3658_SHARP_){
return retort.selector._selects_QMARK_.call(null,selector,p1__3658_SHARP_,context);
});})(and__4120__auto__,map__3660,map__3660__$1,context,position,siblings))
,cljs.core.take.call(null,position,siblings)));
} else {
return and__4120__auto__;
}
});
retort.selector.last_child_of_type = (function retort$selector$last_child_of_type(hiccup,p__3663,selector){
var map__3664 = p__3663;
var map__3664__$1 = (((((!((map__3664 == null))))?(((((map__3664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3664):map__3664);
var context = map__3664__$1;
var siblings = cljs.core.get.call(null,map__3664__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3664__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var and__4120__auto__ = retort.selector._selects_QMARK_.call(null,selector,hiccup,context);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.not,cljs.core.map.call(null,((function (and__4120__auto__,map__3664,map__3664__$1,context,siblings,position){
return (function (p1__3662_SHARP_){
return retort.selector._selects_QMARK_.call(null,selector,p1__3662_SHARP_,context);
});})(and__4120__auto__,map__3664,map__3664__$1,context,siblings,position))
,cljs.core.drop.call(null,(position + (1)),siblings)));
} else {
return and__4120__auto__;
}
});
retort.selector.only_of_type = (function retort$selector$only_of_type(hiccup,p__3668,selector){
var map__3669 = p__3668;
var map__3669__$1 = (((((!((map__3669 == null))))?(((((map__3669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3669):map__3669);
var context = map__3669__$1;
var siblings = cljs.core.get.call(null,map__3669__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3669__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var and__4120__auto__ = retort.selector._selects_QMARK_.call(null,selector,hiccup,context);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (and__4120__auto__,map__3669,map__3669__$1,context,siblings,position){
return (function (p1__3667_SHARP_,p2__3666_SHARP_){
return retort.selector._selects_QMARK_.call(null,selector,p2__3666_SHARP_,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),p1__3667_SHARP_));
});})(and__4120__auto__,map__3669,map__3669__$1,context,siblings,position))
,cljs.core.concat.call(null,cljs.core.take.call(null,position,siblings),cljs.core.drop.call(null,(position + (1)),siblings)))));
} else {
return and__4120__auto__;
}
});
retort.selector.only_child = (function retort$selector$only_child(hiccup,p__3671){
var map__3672 = p__3671;
var map__3672__$1 = (((((!((map__3672 == null))))?(((((map__3672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3672):map__3672);
var siblings = cljs.core.get.call(null,map__3672__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
return cljs.core._EQ_.call(null,cljs.core.count.call(null,siblings),(1));
});
retort.selector.__empty = (function retort$selector$__empty(hiccup,_){
return cljs.core.empty_QMARK_.call(null,retort.hiccup.children.call(null,hiccup));
});
retort.selector.n_children = (function retort$selector$n_children(hiccup,_,n){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,retort.hiccup.children.call(null,hiccup)),n);
});
retort.selector.every_child = (function retort$selector$every_child(hiccup,context,selector){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,retort.selector.children_selects_QMARK_.call(null,hiccup,context,selector));
});
retort.selector.some_child = (function retort$selector$some_child(hiccup,context,selector){
return cljs.core.some.call(null,cljs.core.identity,retort.selector.children_selects_QMARK_.call(null,hiccup,context,selector));
});
retort.selector.after = (function retort$selector$after(hiccup,p__3674,selector){
var map__3675 = p__3674;
var map__3675__$1 = (((((!((map__3675 == null))))?(((((map__3675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3675):map__3675);
var context = map__3675__$1;
var siblings = cljs.core.get.call(null,map__3675__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3675__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if((position === (0))){
return null;
} else {
return retort.selector._selects_QMARK_.call(null,selector,cljs.core.nth.call(null,siblings,(position - (1))),cljs.core.update.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.dec));
}
});
retort.selector.before = (function retort$selector$before(hiccup,p__3677,selector){
var map__3678 = p__3677;
var map__3678__$1 = (((((!((map__3678 == null))))?(((((map__3678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3678):map__3678);
var context = map__3678__$1;
var siblings = cljs.core.get.call(null,map__3678__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3678__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,siblings) - (1)),position)){
return null;
} else {
return retort.selector._selects_QMARK_.call(null,selector,cljs.core.nth.call(null,siblings,(position + (1))),cljs.core.update.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.dec));
}
});
retort.selector.preceding = (function retort$selector$preceding(hiccup,p__3680,selector){
var map__3681 = p__3680;
var map__3681__$1 = (((((!((map__3681 == null))))?(((((map__3681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3681):map__3681);
var context = map__3681__$1;
var siblings = cljs.core.get.call(null,map__3681__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3681__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (map__3681,map__3681__$1,context,siblings,position){
return (function (i,sibling){
return retort.selector._selects_QMARK_.call(null,selector,sibling,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),i));
});})(map__3681,map__3681__$1,context,siblings,position))
,cljs.core.drop.call(null,(position + (1)),siblings)));
});
retort.selector.following = (function retort$selector$following(hiccup,p__3683,selector){
var map__3684 = p__3683;
var map__3684__$1 = (((((!((map__3684 == null))))?(((((map__3684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3684):map__3684);
var context = map__3684__$1;
var siblings = cljs.core.get.call(null,map__3684__$1,new cljs.core.Keyword(null,"siblings","siblings",382285157));
var position = cljs.core.get.call(null,map__3684__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,((function (map__3684,map__3684__$1,context,siblings,position){
return (function (i,sibling){
return retort.selector._selects_QMARK_.call(null,selector,sibling,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"position","position",-2011731912),i));
});})(map__3684,map__3684__$1,context,siblings,position))
,cljs.core.take.call(null,position,siblings)));
});
retort.selector._not = (function retort$selector$_not(hiccup,context,selector){
return cljs.core.not.call(null,retort.selector._selects_QMARK_.call(null,selector,hiccup,context));
});
retort.selector._and = (function retort$selector$_and(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3690 = arguments.length;
var i__4731__auto___3691 = (0);
while(true){
if((i__4731__auto___3691 < len__4730__auto___3690)){
args__4736__auto__.push((arguments[i__4731__auto___3691]));

var G__3692 = (i__4731__auto___3691 + (1));
i__4731__auto___3691 = G__3692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.selector._and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.selector._and.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,context,selectors){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__3686_SHARP_){
return retort.selector._selects_QMARK_.call(null,p1__3686_SHARP_,hiccup,context);
}),selectors));
});

retort.selector._and.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.selector._and.cljs$lang$applyTo = (function (seq3687){
var G__3688 = cljs.core.first.call(null,seq3687);
var seq3687__$1 = cljs.core.next.call(null,seq3687);
var G__3689 = cljs.core.first.call(null,seq3687__$1);
var seq3687__$2 = cljs.core.next.call(null,seq3687__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3688,G__3689,seq3687__$2);
});

retort.selector._or = (function retort$selector$_or(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3697 = arguments.length;
var i__4731__auto___3698 = (0);
while(true){
if((i__4731__auto___3698 < len__4730__auto___3697)){
args__4736__auto__.push((arguments[i__4731__auto___3698]));

var G__3699 = (i__4731__auto___3698 + (1));
i__4731__auto___3698 = G__3699;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.selector._or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.selector._or.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,context,selectors){
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__3693_SHARP_){
return retort.selector._selects_QMARK_.call(null,p1__3693_SHARP_,hiccup,context);
}),selectors));
});

retort.selector._or.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.selector._or.cljs$lang$applyTo = (function (seq3694){
var G__3695 = cljs.core.first.call(null,seq3694);
var seq3694__$1 = cljs.core.next.call(null,seq3694);
var G__3696 = cljs.core.first.call(null,seq3694__$1);
var seq3694__$2 = cljs.core.next.call(null,seq3694__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3695,G__3696,seq3694__$2);
});

retort.selector._xor = (function retort$selector$_xor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3704 = arguments.length;
var i__4731__auto___3705 = (0);
while(true){
if((i__4731__auto___3705 < len__4730__auto___3704)){
args__4736__auto__.push((arguments[i__4731__auto___3705]));

var G__3706 = (i__4731__auto___3705 + (1));
i__4731__auto___3705 = G__3706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.selector._xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.selector._xor.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,context,selectors){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__3700_SHARP_){
return retort.selector._selects_QMARK_.call(null,p1__3700_SHARP_,hiccup,context);
}),selectors))));
});

retort.selector._xor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.selector._xor.cljs$lang$applyTo = (function (seq3701){
var G__3702 = cljs.core.first.call(null,seq3701);
var seq3701__$1 = cljs.core.next.call(null,seq3701);
var G__3703 = cljs.core.first.call(null,seq3701__$1);
var seq3701__$2 = cljs.core.next.call(null,seq3701__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3702,G__3703,seq3701__$2);
});

retort.selector.selectors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nth-child","nth-child",160714016),new cljs.core.Keyword(null,"only-child","only-child",-1420502495),new cljs.core.Keyword(null,"first-child","first-child",2114099842),new cljs.core.Keyword(null,"nth-child-of-type","nth-child-of-type",841704131),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"nth-last-child","nth-last-child",1361442853),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"only-of-type","only-of-type",693975143),new cljs.core.Keyword(null,"n-children","n-children",1194486633),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.Keyword(null,"last-child-of-type","last-child-of-type",-236605139),new cljs.core.Keyword(null,"nth-last-of-type","nth-last-of-type",-261762706),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"following","following",-2049193617),new cljs.core.Keyword(null,"every-child","every-child",616000624),new cljs.core.Keyword(null,"preceding","preceding",68293936),new cljs.core.Keyword(null,"xor","xor",-1119942254),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"first-child-of-type","first-child-of-type",-1734921454),new cljs.core.Keyword(null,"some-child","some-child",-1031433068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"last-child","last-child",1330670325),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"one-child","one-child",1408102616),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"before","before",-1633692388)],[retort.selector.nth_child,retort.selector.only_child,retort.selector.first_child,retort.selector.nth_child_of_type,retort.selector.func,retort.selector.nth_last_child,retort.selector.parent,retort.selector.only_of_type,retort.selector.n_children,retort.selector._or,retort.selector._not,retort.selector.last_child_of_type,retort.selector.nth_last_of_type,retort.selector.__empty,retort.selector.following,retort.selector.every_child,retort.selector.preceding,retort.selector._xor,retort.selector.after,retort.selector.first_child_of_type,retort.selector.some_child,retort.selector.id,retort.selector.classes,retort.selector.last_child,retort.selector._and,(function (p1__3707_SHARP_,p2__3708_SHARP_){
return retort.selector.n_children.call(null,p1__3707_SHARP_,p2__3708_SHARP_,(1));
}),retort.selector.tag,retort.selector.attributes,retort.selector.before]);
retort.selector.mem_compose = cljs.core.memoize.call(null,retort.selector.compose.compose);
retort.selector.parse_modifier = (function retort$selector$parse_modifier(selector){
var pred__3709 = cljs.core._EQ_;
var expr__3710 = cljs.core.first.call(null,cljs.core.name.call(null,selector));
if(cljs.core.truth_(pred__3709.call(null,"!",expr__3710))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not,cljs.core.keyword.call(null,cljs.core.subs.call(null,cljs.core.name.call(null,selector),(1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,selector], null);
}
});
retort.selector.selects_by_composed_QMARK_ = (function retort$selector$selects_by_composed_QMARK_(composed,hiccup,context){
return cljs.core.every_QMARK_.call(null,(function (p__3712){
var vec__3713 = p__3712;
var selector = cljs.core.nth.call(null,vec__3713,(0),null);
var args = cljs.core.nth.call(null,vec__3713,(1),null);
var vec__3716 = retort.selector.parse_modifier.call(null,selector);
var modifier = cljs.core.nth.call(null,vec__3716,(0),null);
var selector__$1 = cljs.core.nth.call(null,vec__3716,(1),null);
return modifier.call(null,cljs.core.apply.call(null,cljs.core.get.call(null,retort.selector.selectors,selector__$1),hiccup,context,args));
}),composed);
});
retort.selector.selects_QMARK_ = (function retort$selector$selects_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3726 = arguments.length;
var i__4731__auto___3727 = (0);
while(true){
if((i__4731__auto___3727 < len__4730__auto___3726)){
args__4736__auto__.push((arguments[i__4731__auto___3727]));

var G__3728 = (i__4731__auto___3727 + (1));
i__4731__auto___3727 = G__3728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return retort.selector.selects_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

retort.selector.selects_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (selector,hiccup,p__3722){
var vec__3723 = p__3722;
var context = cljs.core.nth.call(null,vec__3723,(0),null);
var composed = retort.selector.compose.compose.call(null,selector);
return retort.selector.selects_by_composed_QMARK_.call(null,composed,hiccup,context);
});

retort.selector.selects_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
retort.selector.selects_QMARK_.cljs$lang$applyTo = (function (seq3719){
var G__3720 = cljs.core.first.call(null,seq3719);
var seq3719__$1 = cljs.core.next.call(null,seq3719);
var G__3721 = cljs.core.first.call(null,seq3719__$1);
var seq3719__$2 = cljs.core.next.call(null,seq3719__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3720,G__3721,seq3719__$2);
});

retort.selector._selects_QMARK_ = retort.selector.selects_QMARK_;

//# sourceMappingURL=selector.js.map

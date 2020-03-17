// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.util');
goog.require('cljs.core');
arcanum.util.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
arcanum.util.unique_timeout = (function arcanum$util$unique_timeout(key,f,time){
var temp__5720__auto___3332 = cljs.core.get.call(null,cljs.core.deref.call(null,arcanum.util.state),key);
if(cljs.core.truth_(temp__5720__auto___3332)){
var timeout_3333 = temp__5720__auto___3332;
clearTimeout(timeout_3333);
} else {
}

return cljs.core.swap_BANG_.call(null,arcanum.util.state,cljs.core.assoc,key,setTimeout(f,time));
});
arcanum.util.group_count = (function arcanum$util$group_count(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentVector.EMPTY;
} else {
var counts = cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.update.call(null,counts,x,(function (p1__3334_SHARP_){
return ((function (){var or__4131__auto__ = p1__3334_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + (1));
}));
}),cljs.core.PersistentArrayMap.EMPTY,xs);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (counts){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.get.call(null,counts,x)], null);
});})(counts))
,cljs.core.distinct.call(null,xs)));
}
});
arcanum.util.remove_one = (function arcanum$util$remove_one(pred,coll){
return cljs.core.concat.call(null,cljs.core.take_while.call(null,cljs.core.complement.call(null,pred),coll),cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll)));
});
arcanum.util.get_first = (function arcanum$util$get_first(pred,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,pred,coll));
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {arcanum.util.Object}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
*/
arcanum.util.SubAtom = (function (base,path,meta){
this.base = base;
this.path = path;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
arcanum.util.SubAtom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

arcanum.util.SubAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

arcanum.util.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._hash.call(null,cljs.core.get.call(null,self__.base,self__.path));
});

arcanum.util.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

arcanum.util.SubAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return cljs.core._swap_BANG_.call(null,self__.base,cljs.core.assoc_in,self__.path,v);
});

arcanum.util.SubAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.base,cljs.core.update_in.call(null,cljs.core.deref.call(null,self__.base),self__.path,f));

return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.base),self__.path);
});

arcanum.util.SubAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.base,cljs.core.update_in.call(null,cljs.core.deref.call(null,self__.base),self__.path,((function (this$__$1){
return (function (p1__3335_SHARP_){
return f.call(null,p1__3335_SHARP_,a);
});})(this$__$1))
));

return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.base),self__.path);
});

arcanum.util.SubAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.base,cljs.core.update_in.call(null,cljs.core.deref.call(null,self__.base),self__.path,((function (this$__$1){
return (function (p1__3336_SHARP_){
return f.call(null,p1__3336_SHARP_,a,b);
});})(this$__$1))
));

return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.base),self__.path);
});

arcanum.util.SubAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.base,cljs.core.update_in.call(null,cljs.core.deref.call(null,self__.base),self__.path,((function (this$__$1){
return (function (p1__3337_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3337_SHARP_,a,b], null),xs));
});})(this$__$1))
));

return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.base),self__.path);
});

arcanum.util.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return null;
});

arcanum.util.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core._add_watch.call(null,self__.base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.hash.call(null,this$__$1),key], null),((function (this$__$1){
return (function (k,r,o,n){
var so = cljs.core.get_in.call(null,o,self__.path);
var sn = cljs.core.get_in.call(null,n,self__.path);
if(cljs.core._EQ_.call(null,so,sn)){
return null;
} else {
return f.call(null,k,this$__$1,so,sn);
}
});})(this$__$1))
);

return this$__$1;
});

arcanum.util.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core._remove_watch.call(null,self__.base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.hash.call(null,this$__$1),key], null));

return this$__$1;
});

arcanum.util.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.base),self__.path);
});

arcanum.util.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

arcanum.util.SubAtom.cljs$lang$type = true;

arcanum.util.SubAtom.cljs$lang$ctorStr = "arcanum.util/SubAtom";

arcanum.util.SubAtom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"arcanum.util/SubAtom");
});

/**
 * Positional factory function for arcanum.util/SubAtom.
 */
arcanum.util.__GT_SubAtom = (function arcanum$util$__GT_SubAtom(base,path,meta){
return (new arcanum.util.SubAtom(base,path,meta));
});

arcanum.util.subatom = (function arcanum$util$subatom(base,path){
return arcanum.util.__GT_SubAtom.call(null,base,path,null);
});

//# sourceMappingURL=util.js.map

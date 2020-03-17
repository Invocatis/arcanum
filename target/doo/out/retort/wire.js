// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('retort.wire');
goog.require('cljs.core');
retort.wire.wire_event = (function retort$wire$wire_event(attributes,p__3752){
var vec__3753 = p__3752;
var event = cljs.core.nth.call(null,vec__3753,(0),null);
var f = cljs.core.nth.call(null,vec__3753,(1),null);
if(cljs.core.contains_QMARK_.call(null,attributes,event)){
return cljs.core.update.call(null,attributes,event,((function (vec__3753,event,f){
return (function (p1__3751_SHARP_){
return cljs.core.juxt.call(null,p1__3751_SHARP_,cljs.core.partial.call(null,f,attributes));
});})(vec__3753,event,f))
);
} else {
return cljs.core.assoc.call(null,attributes,event,cljs.core.partial.call(null,f,attributes));
}
});
retort.wire.wire = (function retort$wire$wire(plan,p__3756){
var vec__3757 = p__3756;
var seq__3758 = cljs.core.seq.call(null,vec__3757);
var first__3759 = cljs.core.first.call(null,seq__3758);
var seq__3758__$1 = cljs.core.next.call(null,seq__3758);
var tag = first__3759;
var first__3759__$1 = cljs.core.first.call(null,seq__3758__$1);
var seq__3758__$2 = cljs.core.next.call(null,seq__3758__$1);
var attr0 = first__3759__$1;
var args0 = seq__3758__$2;
var hiccup = vec__3757;
return cljs.core.reduce.call(null,((function (vec__3757,seq__3758,first__3759,seq__3758__$1,tag,first__3759__$1,seq__3758__$2,attr0,args0,hiccup){
return (function (hiccup__$1,piece){
return cljs.core.update.call(null,hiccup__$1,(1),retort.wire.wire_event,piece);
});})(vec__3757,seq__3758,first__3759,seq__3758__$1,tag,first__3759__$1,seq__3758__$2,attr0,args0,hiccup))
,hiccup,plan);
});

//# sourceMappingURL=wire.js.map

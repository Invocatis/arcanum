// Compiled by ClojureScript 1.10.520 {:target :nodejs}
goog.provide('arcanum.registrar');
goog.require('cljs.core');
goog.require('arcanum.module');
goog.require('arcanum.module.data.toggle.core');
goog.require('arcanum.module.data.value.core');
goog.require('arcanum.module.data.value.map');
goog.require('arcanum.module.data.value.select');
goog.require('arcanum.module.input.core');
goog.require('arcanum.module.notification.core');
goog.require('arcanum.component');
goog.require('arcanum.component.panel');
goog.require('arcanum.component.background');
goog.require('arcanum.component.select');
goog.require('arcanum.component.flipmove');
if((typeof arcanum !== 'undefined') && (typeof arcanum.registrar !== 'undefined') && (typeof arcanum.registrar.registrar !== 'undefined')){
} else {
arcanum.registrar.registrar = (function (){
arcanum.module.register_BANG_.call(null,arcanum.module.data.toggle.core.module,new cljs.core.Keyword(null,"toggle","toggle",1291842030));

arcanum.module.register_BANG_.call(null,arcanum.module.notification.core.module,new cljs.core.Keyword(null,"notification","notification",-222338233));

arcanum.module.register_BANG_.call(null,arcanum.module.data.value.core.module,new cljs.core.Keyword(null,"value","value",305978217));

arcanum.module.register_BANG_.call(null,arcanum.module.data.value.select.module,new cljs.core.Keyword(null,"select","select",1147833503));

arcanum.component.register_BANG_.call(null,arcanum.component.panel.component,new cljs.core.Keyword(null,"panel","panel",-558637456));

arcanum.component.register_BANG_.call(null,arcanum.component.background.component,new cljs.core.Keyword(null,"background","background",-863952629));

arcanum.component.register_BANG_.call(null,arcanum.component.select.component,new cljs.core.Keyword(null,"select","select",1147833503));

return arcanum.component.register_BANG_.call(null,arcanum.component.flipmove.component,new cljs.core.Keyword(null,"flipmove","flipmove",-1189755278));
})()
;
}

//# sourceMappingURL=registrar.js.map

(ns arcanum.registrar
  (:require
   [arcanum.module :as module]
   [arcanum.module.data.toggle.core :as toggle]
   [arcanum.module.data.value.core :as value]
   [arcanum.module.data.value.map :as mapper]
   [arcanum.module.data.value.select :as select-module]
   [arcanum.module.input.core :as input]
   [arcanum.module.notification.core :as notification]

   [arcanum.component :as component]
   [arcanum.component.panel :as panel]
   [arcanum.component.background :as background]
   [arcanum.component.select :as select-component]
   [arcanum.component.flipmove :as flipmove]))


(defonce registrar
  (do
    ; (module/register! calculator/module :calculator)
    ; (module/register! keyboard/module :keyboard)
    (module/register! toggle/module :toggle)
    (module/register! notification/module :notification)
    (module/register! value/module :value)
    (module/register! select-module/module :select)

    (component/register! panel/component :panel)
    (component/register! background/component :background)
    (component/register! select-component/component :select)
    (component/register! flipmove/component :flipmove)))

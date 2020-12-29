import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import CarbonComponentsVue from '@carbon/vue/src/index'
import './assets/styles/_carbon-precompile.css'
import { CarbonIconsVue } from '@carbon/icons-vue'
import i18n from './i18n'

Vue.use(CarbonIconsVue, { components: [] })
Vue.use(CarbonComponentsVue)

Vue.config.productionTip = false
Vue.prototype.$storage = window.sessionStorage

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

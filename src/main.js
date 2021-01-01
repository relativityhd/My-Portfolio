import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/_carbon-precompile.css'
import i18n from './i18n'
import VueLuxon from 'vue-luxon'

Vue.use(VueLuxon, {
  input: {
    zone: 'utc',
    format: 'yyyy-MM'
  },
  output: {
    format: 'MMM yyyy'
  }
})

Vue.config.productionTip = false
Vue.prototype.$storage = window.sessionStorage

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

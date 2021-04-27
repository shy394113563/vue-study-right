import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import './plugins/element'
import './assets/css/global.css'
require('./mock/index')

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

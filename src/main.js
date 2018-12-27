import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(Element)  // 全局注册elementui

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

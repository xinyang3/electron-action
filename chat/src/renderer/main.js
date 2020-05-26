import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import './assets/css/common.css'
// import './assets/iconfont/iconfont.js'
import 'static/resource/js/ipcRender'
import 'static/resource/js/window-opera'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

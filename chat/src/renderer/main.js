import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import axios from 'resource/js/axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'
// import './assets/iconfont/iconfont.js'
import 'resource/js/ipcRender'
import 'resource/js/toolbar'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(elementUi)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

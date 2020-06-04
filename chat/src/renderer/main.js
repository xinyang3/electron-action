import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import axios from 'resource/js/axios'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css'
import 'resource/js/toolbar'
import './plugins/ipcRender'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
var vm = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
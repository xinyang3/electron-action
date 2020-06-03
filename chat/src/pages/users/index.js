
import Vue from 'vue'
// const lang = require('element-ui/lib/locale/lang/en')
// const locale = require('element-ui/lib/locale')
import { Button, Input, Radio, Checkbox, CheckboxGroup, CheckboxButton, Form, FormItem } from 'element-ui'
import axios from 'resource/js/axios'
import 'element-ui/lib/theme-chalk/index.css'

// const { template } = require('./template')

import('resource/js/ipcRender')
import('resource/js/toolbar')
import('./style.css')

// locale.use(lang)
Vue.use(axios)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Radio.name, Radio)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)

const vm = new Vue({
  name: 'app',
  el: '#app',
  template: '<App/>',
  components: { App: () => import('./views/app.vue') },
  // template: template,
})
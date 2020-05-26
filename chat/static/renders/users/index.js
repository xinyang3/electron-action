
const Vue = require('vue/dist/vue')
const lang = require('element-ui/lib/locale/lang/en')
const locale = require('element-ui/lib/locale')
const { Button, Input, Radio, Checkbox, CheckboxGroup, CheckboxButton, Form, FormItem } = require('element-ui/lib/element-ui.common')
const { template } = require('./template')
const { confirm, cancel } = require('./plugins/render-contract')
const axios = require('./plugins/axios')
require('../../resource/js/ipcRender')
require('../../resource/js/window-opera')

locale.use(lang)
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
  components: { App: () => require('./pages/app.vue') },
  template: template,
  created () {
    this.getUsers()
  },
  data () {
    return {
      search: '',
      users: [],
      usersChecked: []
    }
  },
  methods: {
    getUsers () {
      axios.request.get('/windows/users').then(res => {
        this.users = res.data.data.list
      })
    },
    checkChange (data) {
    },
    confirm () {
      if (this.usersChecked.length === 0) return;
      confirm(this.usersChecked)
    },
    cancel () {
      cancel(this.usersChecked)
    }
  },
})

console.log(vm)
/** 
 * @description axios common js 
 * @author xinyang3
 * @date 2020/5/26
*/
const Axios = require('axios')
const configSys = require('../../../config-sys')

const axios = Axios.create({
  baseURL: `http://${configSys.shost}:${configSys.sport}/api`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

module.exports = {
  request: axios,
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', axios)
  }
}
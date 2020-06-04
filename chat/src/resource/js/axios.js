/**
 * @description axios 处理
 * @author xinyang3
 * @date 2020/5/13
 */

import Axios from 'axios'
import configSys from 'root/config-sys'

const axios = Axios.create({
  baseURL: `http://${configSys.shost}:${configSys.sport}/api`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

export { axios as request }

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: axios
    })
  }
}

/** 
 * @description browwindow 预加载写入全局变量
 * @author xinyang3
 * @date 2029/6/2
 */
const path = require('path')
const devMode = process.env.NODE_ENV === 'development'
const node_modules = path.resolve(__dirname, '../../node_modules')
const static_path = path.resolve(__dirname, '../../static')

if (devMode) {
  require('module').globalPaths.push(node_modules.replace(/\\/g, '\\\\'))
} else {
  window.__static = static_path.replace(/\\/g, '\\\\')
}

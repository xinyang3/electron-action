/**
 * @description 渲染脚本
 * @author xinyang3
 * @date 2020/5/13
 */

(function () {
  if (process.env.NODE_ENV === 'development') {
    require('module').globalPaths.push("<%= htmlWebpackPlugin.options.nodeModules.replace(/\\/g, '\\\\') %>")
  } else {
    window.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
  }
})()

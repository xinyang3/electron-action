/**  
 * @description ipcRender 公用方法
 * @author xinyang3
 * @date 2020/5/25
 */
const ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('render-window-max', (e, args) => {
  if (e) {
    console.warn(`${args}`)
  }
})

ipcRenderer.on('render-window-min', (e, args) => {
  if (e) {
    console.warn(`${args}`)
  }
})

ipcRenderer.on('render-window-close', (e, args) => {
  if (e) {
    console.warn(`${args}`)
  }
})

/**
 * @description 渲染进程注册事件
 * @param {name} eventName {cb} callback function
 * @date 2020/5/27
 */
module.exports.renderRegisterEvent = function (name, cb) {
  if (!name || !cb) {
    return (console.warn(`arguments is not collectly`))
  }
  if (ipcRenderer.eventNames().includes(name)) {
    // 该事件已经注册过确认是否要重复注册
    return (console.warn(`you have registered an event ${name}`))
  }
  ipcRenderer.on(name, cb)
  console.warn(`ipcrenderer registered a event ${name}`)
}

/** 
 * @description 移除渲染进程注册的事件
 * @param {name} eventName {cb} callback function
 * @date 2020/5/27
 */
module.exports.renderRemoveEvent = function (name, cb) {
  if (!name || !cb) {
    return (console.warn(`arguments is not collectly`))
  }
  if (!ipcRenderer.eventNames().includes(name)) return

  ipcRenderer.removeListener(name, cb)
}
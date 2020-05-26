/**  
 * @description ipcRender
 * @author xinyang3
 * @date 2020/5/25
 */
const ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('render-window-max', (e, args) => {
  if (e) {
    console.warn('browser-wnndow is maxed')
  }
})

ipcRenderer.on('render-window-min', (e, args) => {
  if (e) {
    console.warn('browser-wnndow is mined')
  }
})

ipcRenderer.on('render-window-close', (e, args) => {
  if (e) {
    console.warn('browser-wnndow is closed')
  }
})

/**渲染进程注册事件 */
module.exports.renderRegisterEvent = function (name, cb) {
  if (!name || !cb) {
    return (console.warn(`arguments is not collectly`))
  }
  ipcRenderer.on(name, cb)
  console.warn(`ipcrenderer registered a event ${name}`)
}
/**
 * @description 进程之间交互
 * @author xinyang3
 * @date 2020/5/26
*/

const ipcRenderer = require('electron').ipcRenderer
const remote = require('electron').remote
/** 渲染进程接收消息 */
// ipcRenderer.on('users-send', (e, msg) => {
//   if (msg) {
//     console.log(msg)
//   }
//   remote.getCurrentWindow().close()
// })

/** 回调函数关闭当前窗口，也可以在目标渲染窗口中用render.send('window-close')关闭 */
const callback = function (msg) {
  if (msg) console.log(msg)
  remote.getCurrentWindow().close()
}
/** 确认 */
module.exports.confirm = function (data = {}) {
  let pid = remote.getCurrentWindow().getParentWindow().webContents.id
  let cid = remote.getCurrentWindow().id

  ipcRenderer.sendTo(pid, 'users-confirm', { cid, data })
}
/** 取消 */
module.exports.cancel = function (data) {
  let pid = remote.getCurrentWindow().getParentWindow().webContents.id
  let cid = remote.getCurrentWindow().id
  ipcRenderer.sendTo(pid, 'users-cancel', { cid, data })
}
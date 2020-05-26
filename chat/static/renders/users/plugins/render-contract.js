/**
 * @description 进程之间交互
 * @author xinyang3
 * @date 2020/5/26
*/

const ipcRenderer = require('electron').ipcRenderer
const remote = require('electron').remote
/** 渲染进程接收消息 */
ipcRenderer.on('users-send', (e, msg) => {
  if (msg) {
    console.log(msg)
  }
  remote.getCurrentWindow().close()
})


module.exports.confirm = function (data = {}) {
  let id = remote.getCurrentWindow().getParentWindow().webContents.id
  console.log(id)
  ipcRenderer.sendTo(id, 'users-confirm', data)
}

module.exports.cancel = function (data) {
  ipcRenderer.send('users-cancel', data)
}
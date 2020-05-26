/**
 * @description 渲染进程操作窗口
 * @author xinyang3
 * @date 2020/5/15
 */
// import { main } from 'src/main'
import path from 'path';

export function createWindow (option) {
  const { BrowserWindow } = require('electron').remote
  var paths = path.resolve(__static, option.file)
  var options = Object.assign({}, {
    width: 400,
    height: 600,
    transparent: false,
    frame: false,
    resizable: false,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrame: true
    }
  }, option)
  let window = new BrowserWindow(options)
  window.loadURL(`file://${paths}`)
  window.on('close', () => {
    window = null
  })
  window.once('ready-to-show', () => {
    window.show()
  })
  return window
}

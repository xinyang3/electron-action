/**
 * @description 渲染进程操作窗口
 * @author xinyang3
 * @date 2020/5/15
 */
// import { main } from 'src/main'
import path from 'path';
import sysConfig from '../../../config-sys'

// const winURL = process.env.NODE_ENV === 'development'
//   ? `http://${sysConfig.host}:${sysConfig.port}`
//   : `file://${__dirname}/index.html`

export function createWindow (paths = '') {
  const { BrowserWindow } = require('electron').remote
  var paths = path.resolve(__dirname, '../../', paths)
  let window = new BrowserWindow({
    width: 400,
    height: 600,
    transparent: false,
    resizable: true,
    frame: false,
    resizable: false,
    fullscreenable: true,
    title: '语音通话',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrame: true
    }
  })
  window.loadURL(`file://${paths}`)
  window.on('close', () => {
    window = null
  })
  window.once('ready-to-show', () => {
    window.show()
  })
  return window
}

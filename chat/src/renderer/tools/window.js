/**
 * @description 渲染进程操作窗口
 * @author xinyang3
 * @date 2020/5/15
 */
// import { main } from 'src/main'
import path from 'path';
import logger from 'static/resource/js/logger'
import { ipcRender, ipcRenderer } from 'electron'

export function createWindow (option) {
  const { BrowserWindow } = require('electron').remote
  var paths = path.resolve(__static, option.file)
  let window;
  var options = Object.assign({}, {
    width: 400,
    height: 600,
    transparent: false,
    frame: false,
    resizable: false,
    show: true,
    fullscreenable: true,
    closeable: true,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrame: true
    }
  }, option)
  window = new BrowserWindow(options)
  let bid = window.id;

  window.loadURL(`file://${paths}`)

  if (process.env.NODE_ENV === 'development') {
    window.webContents.openDevTools()
  }
  ipcRenderer.send('window-created', { browserId: bid })

  window.on('shown', () => {
  })

  window.on('close', () => {
    logger.debugLog(`render process ${bid} is closed !`)
    window = null
  })
  return window
}

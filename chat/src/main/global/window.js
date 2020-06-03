/**
 * @description 渲染进程操作窗口
 * @author xinyang3
 * @date 2020/5/15
 */
// import { main } from 'src/main'
import path from 'path'
import logger from 'src/resource/js/logger'
import { ipcRender, ipcRenderer, BrowserWindow } from 'electron'
import sysConfig from 'root/config-sys'

/**
 * @description 创建渲染窗口并加载文件
 * @param {option} browserWindow options
 * @author xinyang3
 * @date 2020/5/28
 */
function window (options, winURL) {
  let window

  window = new BrowserWindow(options)
  let bid = window.id

  window.loadURL(winURL)

  window.on('ready-to-show', () => {
    window.show()
    if (process.env.NODE_ENV === 'development') {
      window.webContents.openDevTools()
    }
    logger.debugLog(`render process ${bid} is created !`)
  })

  window.on('close', () => {
    logger.debugLog(`render process ${bid} is closed !`)
    window = null
  })
  return window
}

export function createWindow (option) {
  const winURL = process.env.NODE_ENV === 'development'
    ? `http://${sysConfig.host}:${sysConfig.rport}/${option.file}`
    : `file://${__dirname}/pages/${option.file}`

  const options = Object.assign({}, {
    width: 400,
    height: 600,
    transparent: false,
    frame: false,
    resizable: false,
    show: false,
    backgroundColor: '#FAFAFA',
    fullscreenable: true,
    closeable: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      nodeIntegrationInSubFrame: true,
      // preload: path.resolve(__dirname, '../preload.js')
    }
  }, option)
  return window(options, winURL)
}


export function createWindowLocal (option) {
  var paths = path.resolve(__static, option.file)
  options = Object.assign({}, {
    width: 400,
    height: 600,
    transparent: false,
    frame: false,
    resizable: false,
    show: false,
    backgroundColor: '#FAFAFA',
    fullscreenable: true,
    closeable: true,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrame: true,
      // preload: path.resolve(__dirname, '../preload.js')
    }
  }, option)

  return window(options)
}
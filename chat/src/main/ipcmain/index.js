/**
 * @description ipcMain主进程交互
 * @author xinyang3
 * @date 2020/5/25
 */

import {
  ipcMain,
  BrowserWindow,
  app
} from 'electron'
import logger from 'src/resource/js/logger'

// 窗口最大化
ipcMain.on('window-max', (e, {
  browserId
}) => {
  const bw = BrowserWindow.fromId(browserId)
  if (bw.isMaximized()) {
    bw.restore()
  } else {
    bw.maximize()
  }
  logger.debugLog('window size is reset !')
  bw.webContents.send('render-window-max', 'window size is reset')
})

// 窗口最小化
ipcMain.on('window-min', (e, {
  browserId
}) => {
  BrowserWindow.fromId(browserId).minimize()
  logger.debugLog(`browserWindow ${browserId} is minimize !`)
})

// 创建渲染窗口
ipcMain.on('window-created', (e, {
  browserId
}) => {
  logger.debugLog(`browserWindow ${browserId} is created !`)
})

// 渲染窗口关闭
ipcMain.on('window-close', (e, {
  browserId
}) => {
  const bw = BrowserWindow.fromId(browserId)
  if (bw && bw.close) {
    bw.close()
  }
  logger.debugLog(`browserWindow ${browserId} is closed !`)
})

// 窗口隐藏
ipcMain.on('window-all-hidden', (e, {
  browserId
}) => {
  BrowserWindow.getAllWindows().forEach(window => window.hide())
  logger.debugLog(`all browserWindow is hiden !`)
})
// 主进程日志
ipcMain.on('main-log', (e, log) => {
  logger.debugLog(`${log}`)
})

// 文件下载 
// ipcMain.on('file-download', (e, options) => {
//   logger.debugLog('file download start ...')
//   fileDownload(options).then(dl => {
//     console.log(e.sender._events)
//     e.sender.send('renderer-file-download', 1)
//     options.callback && options.callback()
//   })
// })

// ipcMain.handle('file-download', async (e, options) => {
//   logger.debugLog('file download start ...')
//   const result = await fileDownload(options)
//   console.log(result)
//   return result;
// })
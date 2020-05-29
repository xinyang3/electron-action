/** 
 * @description ipcMain主进程交互
 * @author xinyang3
 * @date 2020/5/25
*/

import { ipcMain, BrowserWindow, app } from 'electron'
import logger from '../../../static/resource/js/logger'

// 窗口最大化
ipcMain.on('window-max', (e, { browserId }) => {
  const bw = BrowserWindow.fromId(browserId)
  if (bw.isMaximized()) {
    bw.restore();
  } else {
    bw.maximize();
  }
  logger.debugLog('window size is reset !')
  bw.webContents.send('render-window-max', 'window size is reset')
})
// 窗口最小化
ipcMain.on('window-min', (e, { browserId }) => {
  BrowserWindow.fromId(browserId).minimize()
  logger.debugLog(`browserWindow ${browserId} is minimize !`)
})
// 创建渲染窗口
ipcMain.on('window-created', (e, { browserId }) => {
  logger.debugLog(`browserWindow ${browserId} is created !`)
})
// 创建渲染窗口
ipcMain.on('window-close', (e, { browserId }) => {
  const bw = BrowserWindow.fromId(browserId);
  if (bw && bw.close) {
    bw.close()
  }
  logger.debugLog(`browserWindow ${browserId} is closed !`)
})

// 隐藏
ipcMain.on('window-all-hidden', (e, { browserId }) => {
  BrowserWindow.getAllWindows().forEach(window => window.hide())
  logger.debugLog(`all browserWindow is hiden !`)
})

ipcMain.on('main-log', (e, log) => {
  logger.debugLog(`$log`)
})
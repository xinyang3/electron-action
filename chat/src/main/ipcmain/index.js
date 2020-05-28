/** 
 * @description ipcMain进程交互
 * @author xinyang3
 * @date 2020/5/25
*/

import { ipcMain, BrowserWindow } from 'electron'
import logger from '../../../static/resource/js/logger'

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

ipcMain.on('window-min', (e, { browserId }) => {
  BrowserWindow.fromId(browserId).minimize()
  logger.debugLog(`browserWindow ${browserId} is minimize !`)
})

ipcMain.on('window-created', (e, { browserId }) => {
  logger.debugLog(`browserWindow ${browserId} is created !`)
})

ipcMain.on('window-close', (e, { browserId }) => {
  const bw = BrowserWindow.fromId(browserId);
  if (bw && bw.close) {
    bw.close()
  }
  logger.debugLog(`browserWindow ${browserId} is closed !`)
})

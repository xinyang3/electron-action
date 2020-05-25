/** 
 * @description ipcMain进程交互
 * @author xinyang3
 * @date 2020/5/25
*/

import { ipcMain, BrowserWindow } from 'electron'

ipcMain.on('window-max', (e, { browserId }) => {
  const bw = BrowserWindow.fromId(browserId)
  if (bw.isMaximized()) {
    bw.restore();
  } else {
    bw.maximize();
  }
})

ipcMain.on('window-min', (e, { browserId }) => {
  BrowserWindow.fromId(browserId).minimize()
})

ipcMain.on('window-close', (e, { browserId }) => {
  debugger
  console.log(browserId)
  BrowserWindow.fromId(browserId).close()
})
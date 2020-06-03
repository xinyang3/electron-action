'use strict'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

import { app, BrowserWindow } from 'electron'
import sysConfig from '../../config-sys'
import Window from './windows'
import './ipcmain'
import './global'

const { createTray } = require('./tray')

let mainWindow = {}

const winURL = process.env.NODE_ENV === 'development'
  ? `http://${sysConfig.host}:${sysConfig.port}`
  : `file://${__dirname}/renderer/index.html`

function createWindow () {
  return new Window({ winURL: winURL })
}

app.on('ready', function () {
  mainWindow = createWindow().mainWindow;
  createTray(app)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('quit', (e) => {

})

export { mainWindow }

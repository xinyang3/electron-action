'use strict'

import { app, BrowserWindow } from 'electron'
import sysConfig from '../../config-sys'
import Window from './windows'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow = {}

function createWindow () {
  return new Window({ winURL: winURL })
}
const winURL = process.env.NODE_ENV === 'development'
  ? `http://${sysConfig.host}:${sysConfig.port}`
  : `file://${__dirname}/index.html`

app.on('ready', function () {
  return (mainWindow = createWindow().mainWindow)
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

export { mainWindow }

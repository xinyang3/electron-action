'use strict';
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\');
}

import { app, BrowserWindow } from 'electron';
import Window from './windows';
import './ipcmain';

import Global from './global';

const sysConfig = require('../../config-sys');
const { createTray } = require('./tray');

let mainWindow = {};

const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://${sysConfig.host}:${sysConfig.port}`
    : `file://${__dirname}/renderer/index.html`;

function createWindow() {
  return new Window({ winURL: winURL });
}

app.on('ready', function() {
  mainWindow = createWindow().mainWindow;
  Global.setProperty('mainBrowserWindowId', mainWindow.id);
  createTray(app);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('quit', (e) => {});

export { mainWindow };

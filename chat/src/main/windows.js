/**
 * @description window 初始化提取
 * @author xinyang3
 * @date 2020/5/18
 */

import { BrowserWindow } from 'electron'

class Window {
  constructor(options) {
    options = Object.assign({}, {
      height: 645,
      useContentSize: true,
      width: 1100,
      frame: false,
      minWidth: 920,
      minHeight: 645,
      webPreferences: {
        nodeIntegration: true
      }
    }, options)
    this.options = options
    this.mainWindow = new BrowserWindow(options)
    this.init(this.mainWindow)
  }

  init (window) {
    window.loadURL(this.options.winURL)
    window.once('ready-to-show', function () {
      window.show()
      if (process.env.NODE_ENV === 'development') {
        window.webContents.openDevTools()
      }
    })

    window.on('closed', () => {
      window = null
    })
    window.on('close', function () {
    });
  }

  destroy () {
    this.mainWindow = null
  }

  getWindow () {
    return this.mainWindow
  }
}

export default Window

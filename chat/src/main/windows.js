/**
 * @description window 初始化提取
 * @author xinyang3
 * @date 2020/5/18
 */

import { BrowserWindow } from 'electron'

class Window {
  constructor(options) {
    options = Object.assign({}, {
      height: 620,
      useContentSize: true,
      width: 1000,
      minWidth: 800,
      minHeight: 600,
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
    })

    window.on('closed', () => {
      window = null
    })
  }

  destroy () {
    this.mainWindow = null
  }

  getWindow () {
    return this.mainWindow
  }
}

export default Window

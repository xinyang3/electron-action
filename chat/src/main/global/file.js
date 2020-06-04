/** 
 * @description 文件下载
 * @author xinyang3
 * @date 2020/6/4
 */

const path = require('path')
const { BrowserWindow } = require('electron')
const { download } = require('electron-dl')

const fileDownload = function ({ window, url, options }) {

  return download(BrowserWindow.getFocusedWindow(), url, {
    saveAs: false,
    directory: options.directory,
    errorMessage: 'file download failed',
    onStarted: options.onStarted || function () { },
    onProgress: options.onProgress || function () { }
  })
}

module.exports = fileDownload
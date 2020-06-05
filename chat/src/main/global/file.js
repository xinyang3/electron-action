/** 
 * @description 文件下载
 * @author xinyang3
 * @date 2020/6/4
 */

const { BrowserWindow } = require('electron');
const { request } = require('resource/js/axios')
const logger = require('resource/js/logger')
// const electronDl = require('electron-dl');
const path = require('path')
const fs = require('fs')
const buffer = require('buffer')

const fileDownload = function ({ window, url, options = {} }) {

  // return download(BrowserWindow.getFocusedWindow(), url, {
  //   saveAs: false,
  //   directory: options.directory,
  //   errorMessage: 'file download failed',
  //   onStarted: options.onStarted || function () { },
  //   onProgress: options.onProgress || function () { }
  // })

  return request.get(url, {
    baseURL: 'http://127.0.0.1:5000',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    onDownloadProgress: options.onProgress
  })
    .then(res => {
      console.log(res.data)
      const data = res.data;
      const filename = res.headers['content-disposition'].match(/filename=([^&]*)/)[1]
      fs.writeFile(path.resolve(options.directory, filename), data, 'binary', (e, d) => {
        if (e) {
          logger.debugLog(`${e}`)
        }
        console.log(d)
      })
    })
}

module.exports.fileDownload = fileDownload
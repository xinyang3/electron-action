/**
 * @description 渲染进程调用主进程文件调用对话框
 * @author xinyang3
 * @date 2020/5/15
 */
import { getFileName } from './utils'
const { dialog } = require('electron')

const fs = require('fs')

/** 获取文件 */
export function selectFile () {
  return dialog.showOpenDialog({
    title: '选择文件',
    filters: [
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile',
      'multiSelections',
      'showHiddenFiles',
      'createDirectory']
  }).then(data => {
    if (data && data.canceled) return

    var paths = data.filePaths // filepath
    let filenames = paths.map(item => {
      return getFileName(item)
    })
    console.log(filenames)
    // fs.readFile(path, 'utf8', (data) => {
    // })
    return Promise.resolve({ paths, filenames })
  })
}
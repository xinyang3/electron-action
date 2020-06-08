/**
 * @description 渲染进程调用主进程文件调用对话框
 * @author xinyang3
 * @date 2020/5/15
 */
import { getFileName } from './utils'
const { dialog } = require('electron')

const fs = require('fs')

/**
 * @description 选择文件
 * @export
 * @returns { promise }
 */
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

/**
 * @description 选择文件夹
 * @export
 * @returns { promsie(path) }
 */
export function selectDirectory () {
  return dialog.showOpenDialog({
    title: '选择文件',
    filters: [
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openDirectory',
      'createDirectory']
  }).then(data => {
    if (data && data.canceled) return
    console.log(data)
    var paths = data.filePaths[0] // filepath
    return Promise.resolve({ paths })
  })
}
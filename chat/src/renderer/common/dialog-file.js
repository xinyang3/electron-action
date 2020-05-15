/**
 * @description 渲染进程调用主进程文件调用对话框
 * @author xinyang3
 * @date 2020/5/15
 */
const { dialog } = require('electron').remote
const fs = require('fs')

/** 获取文件 */
export function getFile () {
  dialog.showOpenDialog({
    title: '选择文件',
    filters: [
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile',
      'multiSelections',
      'showHiddenFiles',
      'createDirectory']
  }).then(data => {
    console.log(data)
    var path = data[0] // filepath

    fs.readFile(path, 'utf8', (data) => {

    })
  })
}

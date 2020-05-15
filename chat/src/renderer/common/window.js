/**
 * @description 渲染进程操作窗口
 * @author xinyang3
 * @date 2020/5/15
 */

export function createWindow () {
  const { BrowerWindow } = require('electron').remote

  let window = new BrowerWindow({
    width: 500,
    height: 300,
    transparent: true,
    frame: false
  })
  window.on('close')
}

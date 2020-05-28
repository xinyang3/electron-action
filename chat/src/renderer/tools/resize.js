/** 
 * @description 窗口大小重置
 * @author xinyang3
 * @date 2020/5/28
*/
const remote = require('electron').remote

export function resize ({ width, height }) {
  remote.getCurrentWindow().setSize(width, height, true);
}

export function getSize () {
  return remote.getCurrentWindow().getSize()
}
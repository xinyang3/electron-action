/**
 * @descriotion 工具类文件
 * @author xinyang3
 * @date 2020/5/18
 */

/**
 * @param {*} path 根据文件路径获取文件名
 */
export function getFileName (path) {
  var index = path.lastIndexOf('\\')
  return path.slice(++index)
}

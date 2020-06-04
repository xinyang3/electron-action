/** 
 * @description 设置全局状态
 * @author xinyang3
 * @date 2020/6/2 
 */

import { selectFile, selectDirectory } from './dialogFile'
import { createWindow } from './window'
import { versions } from '../../../config-sys'

const fileDownload = require('./file')
const path = require('path')


global.selectFile = selectFile;
global.selectDirectory = selectDirectory;

global.createWindow = createWindow;

global.versions = versions;

global.fileDownload = fileDownload;

global.rootPath = path.resolve(__dirname, '../../../')

global.setProperty = function (key, value) {
  return (global[key] = value);
}

global.getProperty = function (key) {
  return global[key]
}

export default global
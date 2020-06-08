/**
 * @description 设置全局状态 渲染进程调用使用remote.getGlobal('')
 * @author xinyang3
 * @date 2020/6/2
 */

import { selectFile, selectDirectory } from './dialogFile';
import { createWindow } from './window';
import { versions } from '../../../config-sys';

const { fileDownload } = require('./file');
const path = require('path');
const { logger } = require('../../resource/js/logger');

global.selectFile = selectFile;
global.selectDirectory = selectDirectory;
global.createWindow = createWindow;
global.fileDownload = fileDownload;

global.versions = versions;
global.rootPath = path.resolve(__dirname, '../../../');
global.logger = logger;

global.setProperty = function (key, value) {
  return (global[key] = value);
};

global.getProperty = function (key) {
  return global[key];
};

export default global;

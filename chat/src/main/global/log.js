/**
 * @description log组件
 * @author xinayng3
 * @date 2020/6/7
 */

const log = require('electron-log');

// log.transports.file.level = false; //关闭文件日志,默认是开启的
// log.transports.console.level = false;

log.transports.console.format = '{h}:{i}:{s} {text}';
log.transports.file.level = 'info';
log.transports.file.file = __dirname + 'info.log';

log.debug(
  '********************************************** electron-log start ******************************'
);

module.exports.log = log;

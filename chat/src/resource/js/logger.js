/**
 * @description log组件
 * @author xinayng3
 * @date 2020/6/7
 */

const logger = require('electron-log');

// log.transports.file.level = false; //关闭文件日志,默认是开启的
// log.transports.console.level = false;

logger.transports.console.format = '{h}:{i}:{s} {text}';
logger.transports.file.level = 'info';
logger.transports.file.file = __dirname + 'info.log';

logger.debug(
  '********************************************** electron-log start ******************************'
);



logger.start = function (log) {
  logger.okLog(`************************ electron process ${log} start ************************************`)
}
logger.end = function (log) {
  logger.okLog(`************************ electron process ${log} end ************************************`)
}
logger.debugLog = function (log) {
  logger.debug(log)
}

logger.okLog = function (log) {
  // logger.log('\x1b[92m', log)
  logger.info(`%c ${log}`, 'color:green')
}
logger.warnLog = function (log) {
  // logger.log('\x1b[93m', log)
  logger.warn(`%c ${log}`, 'color:yellow')
}
logger.errorLog = function (log) {
  // logger.log('\x1b[91m', log)
  logger.error(`%c ${log}`, 'color:red')
}

module.exports = logger


module.exports.logger = logger;
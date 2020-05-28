/**
 * @description logger类
 * @author xinyang3
 * @date 2020/5/28
 */
// const path = require('path')
// const fs = require('fs')
// const log_path = path.resolve(__dirname, '.', 'std.log')
// const { Console } = require('console')
// const outStream = fs.createWriteStream(log_path)
// const logger = new Console({ stdout: outStream, stderr: outStream })

const logger = console

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
  logger.log(`%c ${log}`, 'color:green')
}
logger.warnLog = function (log) {
  // logger.log('\x1b[93m', log)
  logger.log(`%c ${log}`, 'color:yellow')
}
logger.errorLog = function (log) {
  // logger.log('\x1b[91m', log)
  logger.log(`%c ${log}`, 'color:red')
}

module.exports = logger
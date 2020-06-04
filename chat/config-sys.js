/**
 * @description 系统配置文件
 * @author xinyang3
 * @date 2020/5/12
 */
const pakage = require('./package.json')

const versions = { name, productName, productNameZh, version } = pakage

const devConfig = {
  port: 3000, // 开发环境前端端口
  rport: 3001,
  host: '127.0.0.1',
  title: 'chat',
  shost: '127.0.0.1', // server host
  sport: 5000
}
module.exports = devConfig

module.exports.versions = versions

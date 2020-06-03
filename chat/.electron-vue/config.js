/**  
 * @description 环境变量添加
 * @author xinyang3
 * @date 2020/5/20
*/

const path = require('path')

/** 环境变量 */
module.exports.env = {
  'AGORA_APPID': 'f69b4c38a32d436aa1c5c0ebf3eecc32',
  'AGORA_LOG_PATH': '/agora_logs/agora.log' // agora file path
}

/** pages入口文件的配置 */
const reflects = module.exports.reflects = [
  {
    key: 'users',
    name: 'users.html',
    entry: path.resolve(__dirname, '..', 'src/pages/users/index.html'), // 入口模板文件
    main: path.resolve(__dirname, '..', 'src/pages/users/index.js'), // 入口js文件
    style: path.resolve(__dirname, '..', 'src/pages/users/style.css')
  },
  {
    key: 'talk',
    name: 'talk.html',
    entry: path.resolve(__dirname, '..', 'src/pages/talk/index.html'), // 入口模板文件
    main: path.resolve(__dirname, '..', 'src/pages/talk/index-web.js'), // 入口js文件
    style: path.resolve(__dirname, '..', 'src/pages/talk/style.css')
  }
]


module.exports.getEntries = function () {
  let entries = {};
  reflects.forEach((item) => {
    if (!item.main) return;
    entries[item.key] = item.main
  })
  return entries;
}
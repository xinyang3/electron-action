# chat

electron-vue、electron、webpack 集成搭建的跨平台桌面版应用，模拟企业微信实现了部分功能

#### 功能点

- 实现了 electron、vue、webpack 的集成
- 开发和生产环境搭建完善，开发环境实现热加载，生产环境能够生成应用安装包和解压包
- 功能包含通信模块、版本检查更新模块
- 通信模块包含消息通信功能、视频调用功能、文件调用展示、过往消息展示
- 通信模块包含多用户选择、创建房间的功能
- 包含新打开窗口的功能
- 窗口最大化、最小化、双击最大化
- 窗口关闭后右下角缩略图的功能
- 版本检查和更新的功能(目前完成下载)，更新待完善

#### 构建启动

```bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# pack resource
npm run pack

# build electron application for production (windows)
npm run build

# build electron application for production (mac)
npm run build:mac

# mock data address
git clone https://github.com/xinyang3/mockjs-server
cd mockjs-server

npm i
npm run mock

# run unit & end-to-end tests
npm test

# lint all JS/Vue component files in `src/`
npm run lint

```

#### 结构

```
│  config-sys.js                     关于开发环境的ip和端口的配置
│  package-lock.json
│  package.json 
│  README.md
├─.electron-vue                      开发和生产环境脚本配置
│      build.config.js 
│      build.js
│      config.js                     pages渲染窗口的webpack.renders.config的入口文件配置关系
│      dev-client.js
│      dev-runner.js
│      webpack.main.config.js        主进程webpack配置
│      webpack.renderer.config.js    主窗口渲染进程webpack配置
│      webpack.renders.config.js     pages渲染窗口进程webpack配置
│      webpack.web.config.js         web端webpack配置
├─build								 打包生成的文件包含可执行文件和安装包
├─dist								 webpack打包后压缩文件
│  └─electron
│      │  main.js                    主进程相关
│      ├─pages                       pages渲染窗口打包后文件
│      │  │  talk.html               pages模板文件-talk
│      │  │  talk.js       
│      │  │  users.html              pages模板文件-users
│      │  │  users.js
│      ├─renderer                    主渲染窗口打包文件
│      │  │  index.html              模板文件
│      │  │  renderer.js
│      │  └─fonts
│      └─static
├─src                                src源码文件
│  │  index.ejs                      主渲染窗口模板文件
│  ├─main                            主进程文件夹
│  │  │  index.dev.js
│  │  │  index.js                    
│  │  ├─global                       主进程全局global变量所在文件
│  │  └─ipcmain                      主进程通信ipcmain
│  │          index.js
│  ├─pages                           pages渲染窗口文件
│  │  ├─talk                         渲染窗口-talk源码文件(vue应用)
│  │  │  │  index-web.js
│  │  │  │  index.html               模板文件
│  │  │  │  index.js
│  │  │  └─ style.css
│  │  └─users                        渲染窗口-users源码文件(vue应用)
│  │      │  index.html
│  │      │  index.js
│  │      │  style.css
│  │      ├─plugins
│  │      └─views
│  │              app.vue
│  ├─renderer                       主渲染窗口源码位置(vue应用)
│  │  │  App.vue
│  │  │  main.js                    入口文件
│  │  ├─assets                      
│  │  ├─components                  公用组件
│  │  ├─plugins                
│  │  │      ipcRender.js
│  │  ├─request                     接口请求封装
│  │  │      chat.js
│  │  ├─router                      路由配置
│  │  ├─store                       store封装
│  │  ├─tools               
│  │  │      resize.js
│  │  └─views                       .vue页面文件
│  │      │  home.vue
│  │      ├─chat
│  │      ├─contacts     
│  │      ├─frame
│  │      └─setting
│  └─resource                       主进程、渲染窗口公用资源
│      └─js
│              axios.js             axios请求插件
│              ipcRender.js         ipcRenderer公用
│              logger.js            日志封装
│              toolbar.js           
├─static                            在模板文件中引用的静态资源包含基础样式文件、iconfont样式
│  ├─css         
│  ├─icons    
│  └─js
└─test                              测试
```

#### 说明

相对于[electron-vue]( https://github.com/SimulatedGREG/electron-vue/tree/master/template )应用改动了部分配置

+ <b>.electron-vue </b> 新增了 <b>webpack.renders.config.js</b> 配置文件，用于pages渲染窗口
+ <b>.electron-vue </b> 新增了 <b>config.js</b> 配置文件，用于pages渲染窗口的入口文件配置
+ <b>.electron-vue </b> build.js、dev-runner.js文件对应有调整
+ <b>src</b> 新增 <b>pages</b> 文件夹 pages下方主渲染窗口外的其他渲染窗口文件，eg， <b>users</b> 存放users渲染窗口的相文件
+ <b>src</b> 下新增 <b>resource</b> 文件夹，存放主进程和渲染窗口用到的共有资源

#### 参考

- electron [electron 官网](https://www.electronjs.org/)
- electron-vue [electron-vue 官网](https://electron.org.cn/vue/index.html)
- webpack [webpack](https://www.webpackjs.com/)
- electron-dl 文件下载

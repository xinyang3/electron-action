# chat

> electron-vue chat video

### description
> 模拟企业微信实现桌面应用
> 使用electron-vue架构搭建
> 打包工具webpack生成前端压缩文件,使用webpack-dev-server构建开发环境
> electron-builder生成桌面应用压缩包和安装包

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

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

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

### structure
> ├─ .electron 打包和开发环境构建脚本和配置文件  
> ├─ build 打包路径  
> ├─ dist 源码打包路径  
> ├─ static 整个项目静态资源 
> ├──  renders 打开的窗口渲染页面 
> ├──  resource 窗口渲染页面共有资源 
> ├──  iocns 打包用资源文件  
> ├──  config-sys.js 系统配置  
> ├─ src 源码  
> ├──  resource index.html 渲染页面共有资源文件  
> ├──  main 开发和生产环境 入口文件  
> ├──  renderer vue页面根路径  
> ├────  assets 资源  
> ├────  comnon 渲染进程交互主进程  
> ├────  components  
> ├────  plugins  
> ├────  request  
> ├────  router  
> ├────  store  
> ├────  views  
> ├─ test 测试  
> ├─ package.json  
> ├─ eslint.js eslint配置  
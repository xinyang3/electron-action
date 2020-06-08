<template>
  <el-container class="drag versions">
    <el-aside style="width: 30%">
      <p class="img no-drag">
        <i class="icon iconfont icon-weixin2"></i>
      </p>
    </el-aside>
    <el-main>
      <div class="version no-drag">
        <p>
          <span>产品名称: {{ versions.productNameZh }}</span>
        </p>
        <p>
          <span>当前版本: {{ versions.productName }} - {{ versions.version }}</span>
        </p>
        <p>
          <span>最新版本: {{ latestVersion ? latestVersion : '未知' }}</span>
        </p>
        <p>
          <label>下载路径:</label>
          <el-input v-model="path"></el-input>
          <el-button plain @click="selectDirectory">修改</el-button>
        </p>
        <footer>
          <el-button type="primary" @click="update">检查更新</el-button>
          <el-button type="primary" @click="download">
            下载最新
            <span v-if="percent">{{ percent }}%</span>
          </el-button>
        </footer>
        <!-- <p v-if="percent"> -->
        <!-- <el-progress :text-inside="true" :stroke-width="30" :percentage="percent" status="success"></el-progress> -->
        <!-- </p> -->
      </div>
    </el-main>
  </el-container>
</template>
<script>
  import {
    remote,
    ipcRenderer
  } from "electron";
  const fileDownload = remote.getGlobal("fileDownload");
  const selectDirectory = remote.getGlobal("selectDirectory");
  const rootPath = remote.getGlobal("rootPath");
  const path = remote.require("path").resolve(rootPath, ".", "download");

  export default {
    name: "version",
    created() {
      this.versions = remote.getGlobal("versions");
      this.path = path;
    },
    data() {
      return {
        versions: {},
        latestVersion: "",
        percent: 0,
        path: ""
      };
    },
    methods: {
      selectDirectory() {
        selectDirectory().then(({
          paths
        }) => {
          this.path = paths;
        });
      },
      update() {
        this.$http.post("/version/check").then(res => {
          this.latestVersion = res.data.data;
        });
      },
      download() {
        // ipcRenderer.send('file-download', {
        //   url: 'http://pic.lvmama.com/uploads/pc/place2/2016-03-10/ce758154-ce30-4b31-a573-196351955d07.jpg',
        //   options: {

        // })
        // ipcRenderer.invoke('file-download', {
        //   url: 'http://pic.lvmama.com/uploads/pc/place2/2016-03-10/ce758154-ce30-4b31-a573-196351955d07.jpg',
        //   options: {}
        // }).then(dl => {})
        fileDownload({
          url: "http://127.0.0.1:5000/public/sublime.exe",
          options: {
            directory: this.path,
            onProgress: ({
              percent
            }) => {
              console.log(percent);
              this.percent = percent * 100;
            }
          }
        }).then(res => {
          this.percent = 0;
        });
      }
    },
    mounted() {}
  };
</script>
<style lang="scss" scoped>
  .versions {
    background-color: #f2f3f5;
  }

  .el-container {
    height: 100%;
  }

  .el-aside,
  .el-main {
    display: flex;
    flex-direction: column;
  }

  .el-aside {
    width: 30%;
  }

  .img,
  .version {
    margin: auto 0;
    text-align: center;
  }

  .img i {
    font-size: 10rem;
    color: #e0e2e3;
  }

  .version p {
    height: 5rem;
    line-height: 5rem;
    text-align: left;
  }

  .version .el-input {
    display: inline-block;
    width: auto;
  }

  .version .el-input__inner {
    width: 20rem;
  }

  footer {
    margin-top: 1rem;
    float: left;
  }
</style>
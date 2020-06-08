<template>
  <section class="bar drag">
    <header class="no-drag">
      <i class="icon iconfont icon-user"></i>
    </header>
    <section class="settings">
      <ul class="no-drag">
        <li class="set" @click="toPage('chat')">
          <i class="icon iconfont icon-weixin"></i>
        </li>
        <li class="set" @click="toPage('contact')">
          <i class="icon iconfont icon-struct" style="font-size: 3rem"></i>
        </li>
      </ul>
    </section>
    <footer class="settings no-drag">
      <el-popover ref="popover1" placement="right-start" trigger="hover" popper-class="popover-menus">
        <ul class="menus">
          <li class="item">
            <span><i class="icon iconfont el-icon-mobile-phone"></i></span>
            <span class="text">设置管理</span>
          </li>
          <li class="item">
            <span><i class="icon iconfont el-icon-tickets"></i></span>
            <span class="text">休息一下</span>
          </li>
          <li class="item" @click="toPage('version')">
            <span><i class="icon iconfont el-icon-refresh"></i></span>
            <span class="text">版本信息</span>
          </li>
        </ul>
        <span class="set-menu" slot="reference">
          <i class="icon iconfont el-icon-setting"></i>
        </span>
      </el-popover>
    </footer>
  </section>
</template>
<script>
  export default {
    name: 'slidebar',
    data() {
      return {}
    },
    methods: {
      toPage(rname = '') {
        this.$router.push({
          name: rname
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .bar {
    height: 100%;
    width: 5rem;
    position: absolute;
    background-color: #366cb3;

    header {
      text-align: center;
      height: 8rem;
      line-height: 8rem;
    }

    header i {
      font-size: 3rem;
      color: white;
    }

    .settings li,
    footer {
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      cursor: pointer;
    }

    .settings i {
      font-size: 2.3rem;
      color: white;
    }

    footer {
      position: absolute;
      bottom: 0;
      cursor: pointer;
    }

  }
</style>
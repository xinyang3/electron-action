<template>
  <section class="bar">
    <header>
      <i class="icon iconfont icon-user"></i>
    </header>
    <section class="settings">
      <ul>
        <li class="set" @click="toPage('chat')">
          <i class="icon iconfont icon-weixin"></i>
        </li>
        <li class="set" @click="toPage('contact')">
          <i class="icon iconfont icon-struct" style="font-size: 3.3rem"></i>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: 'slidebar',
  data () {
    return {}
  },
  methods: {
    toPage (rname = '') {
      this.$router.push({ name: rname })
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
    font-size: 4rem;
    color: white;
  }
  .settings li {
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    cursor: pointer;
  }
  .settings i {
    font-size: 2.5rem;
    color: white;
  }
}
</style>
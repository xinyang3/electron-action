<template>
  <main class="main-container">
    <slide-bar></slide-bar>
    <section class="container">
      <!-- <header class="header drag">
        <tool-bar></tool-bar>
      </header> -->
      <section class="container-main">
        <slot name="name"></slot>
        <router-view></router-view>
      </section>
    </section>
  </main>
</template>
<script>
  export default {
    name: 'frame',
    components: {
      slideBar: () => import('./slideBar'),
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .main-container {
    height: 100%;
    position: relative;
  }

  .container {
    height: 100%;
    position: relative;
    width: calc(100% - 5rem);
    left: 5rem;
    position: relative;
  }

  /* .header {
    height: 2.5rem;
    position: relative;
    line-height: 2.5rem;
    background-color: #E6E8EB
  } */

  .container-main {
    height: 100%;
  }
</style>
<template>
  <main class="main-container">
    <slide-bar></slide-bar>
    <section class="container">
      <slot name="name"></slot>
      <router-view></router-view>
    </section>
  </main>
</template>
<script>
export default {
  name: "frame",
  components: {
    slideBar: () => import("./slideBar")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-container,
.container {
  height: 100%;
  position: relative;
}
.container {
  left: 5rem;
  position: relative;
}
</style>
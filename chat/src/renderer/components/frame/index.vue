<template>
  <main class="main-container">
    <slide-bar></slide-bar>
    <section class="container">
      <slide-menu></slide-menu>
      <main-container></main-container>
    </section>
  </main>
</template>
<script>
export default {
  name: "frame",
  components: {
    slideBar: () => import("./slideBar"),
    slideMenu: () => import("./slideMenu"),
    mainContainer: () => import("./mainContainer")
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
}
</style>
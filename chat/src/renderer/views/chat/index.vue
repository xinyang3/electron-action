<template>
  <section class="chat">
    <slide-menu></slide-menu>
    <main-container></main-container>
  </section>
</template>
<script>
export default {
  name: "chat",
  components: {
    frame: () => import("render/components/frame"),
    slideMenu: () => import("./slideMenu"),
    mainContainer: () => import("./mainContainer")
  }
};
</script>
<style lang="scss" scoped>
.chat {
  height: 100%;
}
</style>
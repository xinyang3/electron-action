<template>
  <section class="chat">
    <slide-menu></slide-menu>
    <main-container ref="container"></main-container>
  </section>
</template>
<script>
  import mainContainer from './mainContainer.vue'
  import slideMenu from './slideMenu.vue'
  export default {
    name: "chat",
    provide() {
      return {
        root: this
      }
    },
    data() {
      return {
        user: {
          name: '',
          msg: ''
        }
      }
    },
    components: {
      slideMenu,
      mainContainer
    },
    methods: {
      userChange(user) {
        this.user = user;
        this.$refs.container.userChange(user)
      }
    },
    updated() {
      console.log(this.user)
    }
  };
</script>
<style lang="scss" scoped>
  .chat {
    height: 100%;
  }
</style>
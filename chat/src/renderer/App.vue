<template>
  <div id="app">
    <frame />
  </div>
</template>

<script>
export default {
  name: 'chat',
  components: {
    frame: () => import('src/components/frame')
  }
}
</script>

<style>
/* CSS */
</style>

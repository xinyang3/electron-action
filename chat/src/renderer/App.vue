<template>
  <div id="app">
    <frame />
  </div>
</template>

<script>
  export default {
    name: 'chat',
    components: {
      frame: () => import('render/views/frame')
    }
  }
</script>

<style>
  /* CSS */
</style>
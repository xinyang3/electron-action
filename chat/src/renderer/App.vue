<template>
  <div id="app">
    <frame />
  </div>
</template>

<script>
  export default {
    name: 'chat',
    components: {
      frame: () => import('render/components/frame')
    }
  }
</script>

<style>
  /* CSS */
</style>
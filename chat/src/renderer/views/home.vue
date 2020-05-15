<template>
  <main>
    <frame />
  </main>
</template>
<script>
export default {
  name: 'home',
  components: {
    frame: () => import('src/components/frame')
  }
}
</script>
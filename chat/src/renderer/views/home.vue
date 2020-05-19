<template>
  <main>
    <frame />
  </main>
</template>
<script>
export default {
  name: "home",
  components: {
    frame: () => import("render/components/frame")
  }
};
</script>
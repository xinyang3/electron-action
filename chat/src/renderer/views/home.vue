<template>
  <frame />
</template>
<script>
export default {
  name: "home",
  components: {
    frame: () => import("../components/frame")
  }
};
</script>
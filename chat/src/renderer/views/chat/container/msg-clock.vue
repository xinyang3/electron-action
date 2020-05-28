<template>
  <main class="container">
    <header class="header">
      <ul class="tabs">
        <li class="tab" v-bind:class="{'selected': index === 1}" @click="index = 1">
          <span>全部</span>
        </li>
        <li class="tab" v-bind:class="{'selected': index === 2}" @click="index = 2">
          <span>文件</span>
        </li>
        <li class="tab" v-bind:class="{'selected': index === 3}" @click="index = 3">
          <span>图片/视频</span>
        </li>
      </ul>
    </header>
  </main>
</template>
<script>
  export default {
    name: 'msg-clock',
    data() {
      return {
        index: 1
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .clock-area {
    transition: all .3s .3s ease;
  }

  .header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #dcdee0;
  }

  .tabs {
    height: 2.4rem;
    text-align: center;
    line-height: 2.4rem;
    font-size: 1.2rem;
    color: white;
    border-radius: 2px;
  }

  .tab {
    display: inline-block;
    padding: 0 1.5rem;
    background-color: transparent;
    color: initial;
    cursor: pointer;
  }

  .tab.selected {
    background-color: #0082F0;
    color: white;
  }
</style>
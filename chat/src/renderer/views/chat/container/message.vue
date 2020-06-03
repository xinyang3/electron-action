<template>
  <div class="msg-area">
    <section class="contents">
      <!-- <header class="head drag">
        <span class="title">{{title}}</span>
      </header> -->
      <!-- <div class="msg-area"> -->
      <p class="msg-list-current" v-for="msg in msglist" :key="msg">
        <span class="msg">{{msg}}</span>
      </p>
      <!-- </div> -->
    </section>
    <section class="operate">
      <header class="msg-menus">
        <p>
          <span>
            <i class="icon iconfont icon-biaoqing"></i>
          </span>
          <span @click="openFile">
            <i class="icon iconfont icon-file"></i>
          </span>
          <span>
            <i class="icon iconfont icon-picture"></i>
          </span>
          <span @click="say">
            <i class="icon iconfont icon-phone2"></i>
          </span>
          <span>
            <i class="icon iconfont icon-shipin"></i>
          </span>
          <span class="clock">
            <i class="icon iconfont icon-clock2"></i>
          </span>
        </p>
      </header>
      <main class="msg-contents">
        <textarea rows="6" v-on:keyup.enter="send" v-model="message"></textarea>
        <p>
          <button @click="send">发送</button>
        </p>
      </main>
    </section>
  </div>
</template>
<script>

</script>
<style scoped>
</style>
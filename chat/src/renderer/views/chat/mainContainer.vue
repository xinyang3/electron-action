<template>
  <main class="container-content">
    <section class="contents">
      <header class="head">
        <span>somename</span>
      </header>
      <div class="msg-area">
        <p class="msg-list-current" v-for="msg in msglist" :key="msg">
          <span class="msg">{{msg}}</span>
        </p>
      </div>
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
          <span>
            <i class="icon iconfont icon-phone2"></i>
          </span>
          <span>
            <i class="icon iconfont icon-shipin"></i>
          </span>
        </p>
      </header>
      <main class="msg-contents">
        <textarea rows="7" v-on:keyup.enter="send" v-model="message"></textarea>
        <p>
          <button @click="send">发送</button>
        </p>
      </main>
    </section>
  </main>
</template>
<script>
import { msgSend } from "src/request/chat";
import { getFile } from "src/common/dialog-file";
export default {
  name: "mainContainer",
  data() {
    return {
      msglist: [],
      message: ""
    };
  },
  methods: {
    send() {
      if (this.message === "") return;
      msgSend(this.message).then(data => {
        this.msglist.push(...data);
        this.message = "";
      });
    },
    openFile() {
      getFile();
    }
  }
};
</script>
<style lang="scss" scoped>
.container-content {
  float: left;
  width: calc(100% - 27rem);
  height: 100%;
  background-color: #f2f3f5;

  .contents {
    height: calc(100% - 21rem);
  }
  .contents .area {
    border: 0 solid #dcdee0;
    border-width: 1px 0;
    height: calc(100% - 5rem);
    overflow: auto;
  }
  .contents .head {
    height: 5.2rem;
    line-height: 5.2rem;
  }
  .head span {
    font-size: 2rem;
    margin-left: 2rem;
  }
  .operate {
    height: 20rem;
    padding: 0 1rem;
  }
  .operate p {
    margin: 1rem 0;
  }
  .operate span {
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .operate i {
    font-size: 2.2rem;
    color: #80828b;
  }
  .msg-area {
    padding: 1rem 2rem;
    height: calc(100% - 7rem);
    overflow-y: auto;
  }
  .msg-list-current {
    margin: 0.8rem 0;
  }
  .msg-list-current:after {
    clear: both;
    display: block;
    content: "";
  }
  .msg-list-current:nth-of-type(even) .msg {
    float: left;
  }
  .msg-list-current .msg {
    background-color: #cce4fc;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    float: right;
    display: inline-block;
    max-width: 20rem;
    word-break: break-word;
  }
  .msg-contents textarea {
    width: 100%;
    background-color: #f2f3f5;
  }
  .msg-contents button {
    background-color: #f2f3f5;
    margin: 0 1rem;
    float: right;
  }
}
</style>
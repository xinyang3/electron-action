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
  import {
    msgSend
  } from "render/request/chat";
  import {
    getFile
  } from "render/tools/dialogFile";
  import {
    createWindow
  } from "render/tools/window";
  export default {
    name: 'message',
    data() {
      return {
        msglist: [],
        message: "",
        sayWindow: null
      }
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
        getFile().then(({
          paths,
          filenames
        }) => {
          this.msglist.push(filenames);
        });
      },
      say() {
        this.sayWindow = createWindow({
          width: 400,
          height: 600,
          modal: true,
          title: '语音通话',
          file: "renders/talk/index.html"
        });
        // if (!this.sayWindow) {
        // this.sayWindow = createWindow("renders/talk/index.html");
        // }
      },
    }
  }
</script>
<style scoped>
  .msg-area {
    width: calc(100% - 30rem);
    /* padding: 1rem 2rem; */
    /* height: calc(100% - 7rem); */
    overflow-y: auto;
    /* border: 0px solid #dcdee0;
      border-width: 1px 0; */
    height: 100%;
    order: 1
  }

  .contents {
    height: calc(100% - 19.8rem);
    padding: 1rem 2rem;
    overflow-y: auto;
    border: 0px solid #dcdee0;
    border-width: 1px 0
  }

  .contents .area {
    height: calc(100% - 5rem);
    border: 0 solid #dcdee0;
    border-width: 1px 0;
    overflow: auto;
  }

  .head {
    height: 5.2rem;
    line-height: 5.2rem;
  }

  .head span {
    font-size: 1.6rem;
    margin-left: 2rem;
  }

  .head .title {
    display: inline-block;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .operate {
    height: 16rem;
    padding: 0 1rem;
  }

  .operate .msg-menus p {
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

  .msg-contents p {
    text-align: right;
  }

  .clock {
    float: right;
    margin-right: .5rem;
  }
</style>
<template>
  <main class="container-content">
    <header class="head drag">
      <span class="title">{{title}}</span>
    </header>
    <main class="wrap">
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
              <span class="clock" @click="showClockMsg">
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
      <div class="clock-area">
        <msg-clock></msg-clock>
      </div>
    </main>
  </main>
</template>
<script>
  import {
    msgSend
  } from "render/request/chat";
  // import {
  //   getFile
  // } from "render/tools/dialogFile";
  // import {
  //   createWindow
  // } from "render/tools/window";
  import {
    getSize,
    resize
  } from 'render/tools/resize'

  const createWindow = require('electron').remote.getGlobal('createWindow')
  const selectFile = require('electron').remote.getGlobal('selectFile')
  export default {
    name: "mainContainer",
    components: {
      msgClock: () => import('./container/msg-clock.vue')
    },
    data() {
      return {
        title: '',
        msglist: [],
        message: "",
        sayWindow: null,
        clockShow: false
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
        selectFile().then(({
          paths,
          filenames
        }) => {
          this.msglist.push(...filenames);
        });
      },
      say() {
        this.sayWindow = createWindow({
          width: 400,
          height: 600,
          modal: true,
          title: '语音通话',
          modal: true,
          parent: require('electron').remote.getCurrentWindow(),
          file: 'talk.html'
        });
        // if (!this.sayWindow) {
        // this.sayWindow = createWindow("renders/talk/index.html");
        // }
      },
      userChange(user) {
        this.title = user.name || 'awaresome'
        this.msglist = [user.msg || '']
      },
      // 此处有个问题改变窗口大小然后显示clock-area会有个晃动
      showClockMsg() {
        // let show = !this.clockShow
        var dom = document.querySelector('.clock-area')
        var show = !!dom.style.width
        var arr = getSize();
        var width = show ? arr[0] - 300 : arr[0] + 300;
        resize({
          width: width,
          height: arr[1]
        })
        dom.style.width = show ? '' : '300px'
      }
    }
  };
</script>
<style lang="scss" scoped>
  .container-content {
    float: left;
    width: calc(100% - 22.2rem);
    height: 100%;
    background-color: #f2f3f5;
  }

  .container-content .wrap {
    height: calc(100% - 7rem);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .msg-area {
    /* width: calc(100% - 30rem); */
    /* padding: 1rem 2rem; */
    /* height: calc(100% - 7rem); */
    width: 100%;
    /* overflow-y: auto; */
    /* border: 0px solid #dcdee0;
      border-width: 1px 0; */
    height: 100%;
    order: 1;
    flex-shrink: 1;
  }

  .clock-area {
    /* width: 30rem; */
    width: 0;
    height: 100%;
    border-left: 1px solid #dcdee0;
    order: 2;
    flex-shrink: 0;
    /* transition: all 1s 1s ease-in-out; */
  }

  .contents {
    height: calc(100% - 19.8rem);
    padding: 1rem 2rem;
    overflow-y: auto;
    border-bottom: 1px solid #dcdee0;
  }

  .contents .area {
    height: calc(100% - 5rem);
    border: 0 solid #dcdee0;
    border-width: 1px 0;
    overflow: auto;
  }

  .head {
    height: 5rem;
    line-height: 5rem;
    border-bottom: 1px solid #dcdee0;
    padding-top: 1.5rem;
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
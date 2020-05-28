<template>
  <section class="menu">
    <header class="drag">
      <!-- <div class="input"> -->
      <div class="no-drag input">
        <i class="icon iconfont icon-search"></i>
        <input class="search" placeholder="搜索" @change="userListQuery">
        </input>
      </div>
      <i class="plus no-drag icon iconfont icon-plus1" @click="openUsers"></i>
      <!-- </div> -->

      <!-- <i class="icon iconfont icon-plus"></i> -->
    </header>
    <section class="user-list">
      <ul>
        <li v-for="user in users" @click="userChange(user)">
          <div class="content">
            <p class="user">
              <i class="img-group icon iconfont icon-qunliao" v-if="user.group"></i>
              <svg class="icon" aria-hidden="true" v-else>
                <use :xlink:href="user.icon"></use>
              </svg>
            </p>
            <p class="info">
              <span class="name">{{user.name}}</span><br>
              <span class="msg">{{user.msg}}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
  import {
    userlistGet
  } from 'render/request/chat'
  import {
    createWindow
  } from 'render/tools/window'
  import {
    renderRegisterEvent
  } from 'static/resource/js/ipcRender'
  export default {
    name: 'slidebar',
    inject: ['root'],
    data() {
      return {
        users: []
      }
    },
    created() {},
    methods: {
      userListQuery() {
        userlistGet().then(res => {
          this.users = res.data.data.list || []
        })
      },
      openUsers() {
        createWindow({
          width: 650,
          height: 600,
          minWidth: 650,
          minHeight: 600,
          title: '选择用户',
          resizable: true,
          modal: true,
          parent: require('electron').remote.getCurrentWindow(),
          file: 'renders/users/index.html'
        })
        let users = this.users;
        // 注册渲染进程确认和取消的事件
        renderRegisterEvent('users-confirm', (e, {
          cid,
          data,
        }) => {
          users.unshift({
            group: true,
            name: data.join(','),
            msg: `${data.length} person is talking in the meeting ...`
          })
          require('electron').ipcRenderer.send('window-close', {
            browserId: cid
          })
        })
        renderRegisterEvent('users-cancel', (e, {
          cid,
          data,
          callback
        }) => {
          require('electron').ipcRenderer.send('window-close', {
            browserId: cid
          })
        })
      },
      userChange(user = {}) {
        this.root.userChange(user)
      }
    },
    mounted() {
      this.userListQuery()
    }

  }
</script>
<style lang="scss" scoped>
  .menu {
    height: 100%;
    float: left;
    border-right: 1px solid #e5d6f7;
    background-color: #E6E8EB;
    width: 22rem;
  }

  .menu>header {
    /* height: 1rem; */
    padding: 1.5rem 1rem;
  }

  .menu>header i.plus {
    font-size: 2rem;
    margin-left: 0.3rem;
    cursor: pointer;
  }

  .input {
    /* height: 3rem; */
    line-height: 3rem;
    background: #D4D6D9;
    width: 15rem;
    border-radius: 3px;
    margin-left: 1rem;
    display: inline-block;
  }

  .search {
    height: 30px;
    border-radius: 3px;
    background-color: #D4D6D9;
    /* border: 1px solid #e8dfdf; */
    width: 12.2rem;
  }

  .input i {
    /* position: absolute;   */
    /* left: 3rem;
    top: 3rem; */
    margin: 6px 0 5px 5px;
  }

  /* input:focus+i {
    display: none;
  } */

  input::-webkit-input-placeholder {
    font-size: 1.2rem;
    /* padding-left: 1rem; */
  }

  input::-webkit-input-placeholder:focus+i {
    display: none;
  }

  .user-list {
    overflow-y: auto;
    max-height: calc(100% - 7.5rem);
  }

  .user-list li {
    cursor: pointer;
    padding-left: 1.5rem;
  }

  .user-list .content {
    border-bottom: 1px solid #e5d6f7;
    padding: 1rem;
  }

  .user-list .content::after {
    clear: both;
    content: "";
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
  }

  .user-list li:hover {
    background-color: #C3C5C7;
  }

  .user-list .user {
    float: left;
    width: 4rem;
    height: 4rem;
    text-align: center;
    /* padding: 0.25rem 0; */
  }

  .user-list .info {
    float: left;
    width: 12rem;
    padding: 0 .5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info .name {
    font-size: 1.4rem;
    color: #0a0a0a;
  }

  .info .msg {
    display: inline-block;
    margin-top: .6rem;
    font-size: 1.2rem;
    color: #a1a2a2;
  }

  .user svg {
    width: 100%;
    height: 100%;
  }

  .user .img-group {
    font-size: 30px;
    color: #A0D9F6;
  }
</style>
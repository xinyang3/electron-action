<template>
  <section class="menu">
    <header>
      <div class="input">
        <div>
          <i class="icon iconfont icon-search"></i>
            <input class="search" placeholder="搜索">
          </input>
        </div>
      </div>

      <!-- <i class="icon iconfont icon-plus"></i> -->
    </header>
    <section class="user-list">
      <ul>
        <li v-for="user in users">
          <div class="content">
            <p class="user">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-girl-two"></use>
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
import {userlistGet} from 'render/request/chat'
export default {
  name: 'slidebar',
  data () {
    return {
      users: []
    }
  },
  methods: {
    userListQuery () {
      userlistGet().then(res => {
        this.users = res.data.data.list || []
      })
    }
  },
  mounted () {
    this.userListQuery()
  }

}
</script>
<style lang="scss" scoped>
  .menu {
    // width: 16rem;
    height: 100%;
    float: left;
    // position: relative;
    // left: 5rem;
    border-right: 1px solid #e5d6f7;
    background-color: #E6E8EB;
    width: 22rem;
  }
  .input {
    padding: 2.5rem 2rem;
  }
  .search {
    height: 23px;
    border-radius: 3px;
    background-color: #D4D6D9;
    border: 1px solid #e8dfdf;
    width: 17rem;
  }
  .input i {
    position: absolute;
    left: 3rem;
    top: 3rem;
  }
  input:focus + i {
    display: none;
  }
  input::-webkit-input-placeholder {
    // color: red;
    font-size: 1.2rem;
    padding-left: 3rem;
  }
  input::-webkit-input-placeholder:focus + i {
    display: none;
  }
  .user-list {
    overflow-y: auto;
    max-height: calc(100% - 7.5rem);
    // padding-left: 1.5rem;;
  }
  .user-list li{
    // height: 4.2rem;
    // padding: 0.5rem 0;
    // padding: 1rem;
    cursor: pointer;
    padding-left: 1.5rem;
  }
  .user-list .content {
    border-bottom: 1px solid #e5d6f7;
    // height: 100%;
    padding: .6rem;
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
    padding: 0.25rem 0;
  }
  .user-list .info {
    float: left;
    width: 12rem;
    padding: 0 .5rem;
  }
  .info .name {
    font-size: 1.6rem;
    color: #0a0a0a;
  }
  .info .msg {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #a1a2a2;
  }
  .user svg {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <main class="container">
    <section class="users">
      <article class="search">
        <el-input placeholder="请输入内容" v-model="search" @change="getUsers">
          <template slot="prepend"><i class="icon iconfont icon-search"></i></template>
        </el-input>
      </article>
      <section class="contents">
        <el-checkbox-group v-model="usersChecked" @change="checkChange">
          <ul class="list">
            <li class="item" v-for="item in users" :key="item.id">
              <i class="icon iconfont icon-ren1"></i>
              <el-checkbox :label="item.name"></el-checkbox>
            </li>
          </ul>
        </el-checkbox-group>
      </section>
    </section>
    <section class="users-cf">
      <section class="contents">
        <ul class="list">
          <li class="item" v-for="item in usersChecked" :key="item.id">
            <i class="icon iconfont icon-ren1"></i>
            <el-checkbox :label="item" checked></el-checkbox>
          </li>
        </ul>
      </section>
      <footer class="btn-area">
        <el-button class="confirm" type="primary" size="small" @click="confirm">确定</el-button>
        <el-button class="cancel" type="warning" size="small" @click="cancel">取消</el-button>
      </footer>
    </section>
  </main>
</template>
<script>
  import {
    confirm,
    cancel
  } from '../plugins/ipcRenderer'
  import {
    request
  } from 'resource/js/axios.js'
  export default {
    name: 'app',
    created() {
      this.getUsers()
    },
    data() {
      return {
        search: '',
        users: [],
        usersChecked: []
      }
    },
    methods: {
      getUsers() {
        request.get('/windows/users').then(res => {
          this.users = res.data.data.list
        })
      },
      checkChange(data) {},
      confirm() {
        if (this.usersChecked.length === 0) return;
        confirm(this.usersChecked)
      },
      cancel() {
        cancel(this.usersChecked)
      }
    },
  }
</script>
<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>

    <el-avatar :size="55" src="https://empty" @error="errorHandler">
      <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
    </el-avatar>
  </el-menu>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class App extends Vue {
  activeIndex = '1'
  activeIndex2 = '1'

  handleSelect(key: string, keyPath: string) {
    console.log(key, keyPath)
  }
  errorHandler() {
    return true
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}

.el-avatar {
  float: right;
  margin: 2px 20px;
}
.el-avatar > img {
  width: 100%;
}
</style>

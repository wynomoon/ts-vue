<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#74759b"
      text-color="#fff"
      active-text-color="#2b1216"
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
      <el-menu-item index="4">
        <el-button @click="isScreenFull()">
          全屏
        </el-button>
      </el-menu-item>
      <el-submenu index="5" class="lastItem">
        <template #title>
          <el-avatar :size="55" src="https://empty" @error="errorHandler">
            <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
          </el-avatar>
        </template>
        <el-menu-item index="5-4-1">选项1</el-menu-item>
        <el-menu-item index="5-4-2">选项2</el-menu-item>
        <el-menu-item index="5-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'nav',
  setup() {
    const activeIndex = '1'
    const activeIndex2 = '1'
    const errorHandler = () => {
      return true
    }
    return {
      activeIndex,
      activeIndex2,
      errorHandler
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  margin: 0;
  z-index: 3000;
  width: 100%;
  position: fixed;
  top: 0px;
}
.lastItem {
  float: right !important;
}
:deep().el-submenu__icon-arrow {
  position: absolute !important;
}
.el-avatar {
  float: right;
  margin: 2px 20px;
}
.el-avatar > img {
  width: 100%;
}
</style>

<template>
  <div class="header" :class="{ showNav: showNav }">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#74759b"
      text-color="#fff"
      active-text-color="#2b1216"
    >
      <el-menu-item index="1" :likes="42">
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
        <el-button @click="isScreenFull()"> 全屏</el-button>
      </el-menu-item>
      <el-submenu index="5" class="lastItem">
        <template #title>
          <el-avatar :size="55">
            {{ navList[0].name }}
          </el-avatar>
        </template>
        <el-menu-item index="5-4-1"> {{ navList }}</el-menu-item>
        <el-menu-item index="5-4-2"> {{ navList[0].sex }}</el-menu-item>
        <el-menu-item index="5-4-3"> {{ navList[0].job }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import axios from 'axios'

require('../../../mock/user.js')
import { defineComponent, onMounted, reactive, toRefs, ref, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const activeIndex = '1'
    const showNav = ref(false)
    const i = ref(0)
    const state = reactive({ navList: [{}] })
    const userInfo = () => {
      axios
        .get('https:www.test/user.com')
        .then(function(response) {
          state.navList = response.data.userInfo
        })
        .catch(function(error) {
          console.log(error)
        })
    }
    // 获取屏幕滚动高度
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scroll = scrollTop - i.value
      i.value = scrollTop
      // 下滑到300开始判断
      if (scrollTop > 300) {
        showNav.value = scroll > 0
      } else {
        showNav.value = false
      }
    }
    onMounted(() => {
      userInfo()
      window.addEventListener('scroll', handleScroll, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      ...toRefs(state),
      activeIndex,
      handleScroll,
      i,
      showNav
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  margin: 0;
  z-index: 3000;
  width: 100%;
  position: fixed;
  top: 0;
  transition: 500ms;
}
.showNav {
  transform: translate3d(0, -100%, 0);
  transition: 500ms;
}
.lastItem {
  float: right !important;
}

::v-deep .el-submenu__icon-arrow {
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

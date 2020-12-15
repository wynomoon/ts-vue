<template>
  <div class="home">
    <h1>{{ message1 }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="up">
      <div v-for="(item, index) in 11" :key="index" class="triangle">
        <span>{{ index }}</span>
      </div>
    </div>
    <video
      height="270"
      width="400"
      controls="controls"
      poster="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    ></video>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  message1 = 'sss'
}
</script>
<style lang="scss" scoped>
.home {
  text-shadow: 5px 5px 1px #888888;
  color: rgb(0, 0, 0);
}
.up {
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.triangle {
  span {
    display: inline-block;
    height: 10px;
    line-height: 35px;
    margin-left: -5px;
    margin-bottom: -8px;
    text-align: left;
    font-size: 1px;
    font-weight: 550;
    color: rgb(240, 239, 239);
    text-shadow: none;
  }
  margin: 20px;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  &:nth-child(2n) {
    border-bottom: 30px solid rgba(0, 139, 219, 0.733);
    &:hover {
      border-bottom: 30px solid rgba(248, 252, 21, 0.767);
    }
  }
  &:nth-child(2n + 1) {
    border-top: 30px solid rgba(197, 17, 17, 0.733);
    span {
      color: #000 !important;
      margin-top: -308px;
    }
    &:hover {
      border-top: 30px solid rgba(58, 0, 219, 0.733);
    }
  }
}
</style>

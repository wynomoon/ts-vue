<template>
  <el-page-header @back="goBack" content="详情页面"> </el-page-header>
  <div class="main">
    <el-carousel
      direction="vertical"
      :autoplay="true"
      height="400px
    "
    >
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <el-image class="newImage" :src="item.url"></el-image>
      </el-carousel-item>
    </el-carousel>

    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>{{ a }}</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <h1 class="shabi">{{ you }}</h1>
    <h1 class="text">{{ w }}</h1>
    <el-button type="success" @click="whatFk()">
      <i class="el-icon-place"></i>
      <i class="el-icon-lightning"></i>
      <i class="el-icon-tableware"></i>
      成功按钮
    </el-button>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'

interface Person {
  eat(): void
}
interface Programmer extends Person {
  code(): void
}
interface Web {
  app(): void
}
// 程序员类实现接口
class WebProgrammer implements Programmer, Web {
  public name: string
  // 构造函数
  constructor(name: string) {
    this.name = name
  }
  eat() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML = this.name + '下班恰饭    |    '
  }
  code() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML += this.name + '上班  |    '
  }
  app() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML += this.name + '开发小程序  |    '
  }
}
class Son extends WebProgrammer {
  constructor(public age: number) {
    super('白白白')
    this.age = age
  }
  eat() {
    const dom = document.querySelector('.shabi') as Element
    dom.innerHTML = this.name + this.age + '下班恰饭    |    '
  }
}
// 主类
export default class About extends Vue {
  w = '666'
  you = '777'
  imgs = [
    { url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
    { url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg' },
    { url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg' },
    { url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg' }
  ]
  public whatFk(): void {
    const xiaoLi = new WebProgrammer('小李')
    const you = new Son(1000)
    xiaoLi.eat()
    xiaoLi.code()
    xiaoLi.app()
    you.eat()
    you.code()
    you.app()
  }

  goBack() {
    this.$router.push('/')
  }
}
</script>
<style lang="scss" scoped>
.main {
  margin: 0 auto;
  width: 60%;
  @media screen and(max-width: 576px) {
    width: 100%;
  }
}

.newImage {
  width: 100%;
  height: auto;
}
/deep/.el-carousel {
  border-radius: 60px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(200, 250, 166),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <h1>This is an about page</h1>
  <h1 class="shabi">{{ you }}</h1>
  <h1 class="text">{{ w }}</h1>
  <button @click="whatFk()">打印</button>
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
  w = String
  you = String
  public mounted() {
    console.log('22')
    this.whatFk()
  }
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
}
</script>

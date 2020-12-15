<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 class="text">{{ w }}</h1>
    <button @click="whatFk()">打印</button>
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
// 程序员类继承接口
class WebProgrammer implements Programmer, Web {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML = this.name + '下班干饭    |    '
  }
  code() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML += this.name + '上班敲代码   |    '
  }
  app() {
    const dom = document.querySelector('.text') as Element
    dom.innerHTML += this.name + '开发小程序'
  }
}
// 主类
export default class About extends Vue {
  w = new WebProgrammer('小明')
  whatFk(): void {
    const w = new WebProgrammer('小李')
    if (w.name == '小李') {
      w.eat()
      w.code()
      w.app()
    } else {
      w.name == '小明'
    }
  }
}
</script>

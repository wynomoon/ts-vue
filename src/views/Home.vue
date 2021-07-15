<template>
  <div class="contain">
    <div
      v-for="(item, i) in list"
      :key="i"
      :ref="
        (el) => {
          if (el) divs[i] = el
        }
      "
    >
      {{ item }}
    </div>
    <h1>555</h1>
    <img :[bindSrc]="bindUrl" class="imgCont" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onBeforeUpdate, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const navList = ref()
    const list = reactive([1, 2, 3])
    const divs = ref([])
    const bindSrc = ref('src')
    const bindUrl = ref()
    onBeforeUpdate(() => {
      divs.value = []
    })
    onMounted(() => {
      bindUrl.value = require('@/assets/logo.png')
    })
    return {
      list,
      divs,
      navList,
      bindSrc,
      bindUrl
    }
  }
})
</script>
<style lang="scss" scoped>
.contain {
  height: 3000px;
}
.imgCont {
  width: 50px;
  height: 50px;
}
</style>

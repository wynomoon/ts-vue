<template>
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
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onBeforeUpdate } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex = '1'
    const value1 = null
    const value2 = true
    const navList = ref()
    const list = reactive([1, 2, 3])
    const divs = ref([])
    onBeforeUpdate(() => {
      divs.value = []
    })
    return {
      list,
      divs,
      activeIndex,
      value1,
      value2,
      navList
    }
  }
})
</script>
<style lang="scss" scoped></style>

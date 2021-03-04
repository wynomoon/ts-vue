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
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onBeforeUpdate } from 'vue'

export default defineComponent({
  setup() {
    const navList = ref()
    const list = reactive([1, 2, 3])
    const divs = ref([])
    onBeforeUpdate(() => {
      divs.value = []
    })
    return {
      list,
      divs,
      navList
    }
  }
})
</script>
<style lang="scss" scoped>
.contain {
  height: 3000px;
}
</style>

<template>
  <NavBar />
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import NavBar from './components/Nav/NavBar.vue'
@Options({
  components: {
    NavBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 70px auto;
  width: 60%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}
</style>

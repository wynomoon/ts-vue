<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> $ $ $
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav a {
  color: rgb(35, 9, 180);
  padding: 10px;
  background-color: #ff9900;
  box-shadow: 10px 10px 5px #888888;
}
</style>

<template>
  <div id="app">
    <h1> {{ header }} </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      header: 'Appartment Rent Manager'
    }
  }
}
</script>

<style lang="less">
@import "assets/css/vars.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @primary;
  margin-top: 60px;
  max-width: 500px;
  margin: auto;
  font-weight: 700;
}
</style>

<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="center brand-logo">{{ header }}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#/">Tenants</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      header: 'Apartment Rent Manager'
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
  font-weight: 700;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

{
  transform: translateX(10px);
  opacity: 0;
}

nav {
  background: @primary;
}
</style>

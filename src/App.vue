<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style>
  body, div, p, ul, li {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .slide-fade-leave-active {
    opacity: 0;
    -webkit-transform: translate(-25%, 0);
    transform: translate(-25%, 0);
    transition: all .2s linear;
  }
  .slide-fade-leave-active {

  }
  .slide-fade-enter {
    opacity: 0;
    -webkit-transform: translate(75%, 0);
    transform: translate(75%, 0);
  }
  .slide-fade-enter-active {
    transition: all .2s linear;
  }
</style>

<template>
  <div>
  <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <h1>wether</h1>
    <weather-charts></weather-charts>
  </div>
</template>

<script>
  import HeadBar from '../components/HeadBar.vue';
  import WeatherCharts from '../components/charts/weather.vue';
  export default {
    data(){
      return {
        title: '天气'
      }
    },
    components: {
      'head-bar': HeadBar,
      WeatherCharts
    }
  }
</script>
<style lang="css" scoped>
  
</style>
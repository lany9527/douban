<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <search-movie></search-movie>
    <tab></tab>
  </div>
</template>
<script>
  import HeadBar from '../components/HeadBar.vue';
  import SearchMovie from '../components/SearchMovie.vue';
  import Tab from '../components/Tab.vue';
  export default {
    components: {
      'head-bar': HeadBar,
      'tab': Tab,
      SearchMovie
    },
    data () {
      return {
        title: '电影'
      }
    }
  }
</script>
<style></style>
<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <h1>book</h1>
  </div>
</template>
<script>
  import HeadBar from '../components/HeadBar.vue'
  export default {
    components: {
      HeadBar
    },
    data() {
      return {
        title: '图书'
      }
    },
    mounted() {

    },
    methods: {
      getBookList() {

      }
    },
  }
</script>
<style>

</style>
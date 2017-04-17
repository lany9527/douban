<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <h1>book</h1>
    <parent-cmp></parent-cmp>
  </div>
</template>
<script>
  import HeadBar from '../components/HeadBar.vue';
  import parentCmp from '../components/parentCmp.vue';
  export default {
    components: {
      HeadBar,
      parentCmp
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

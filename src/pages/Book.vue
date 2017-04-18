<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <h1>book</h1>
    <!--<parent-cmp></parent-cmp>-->
    <!--<timeago :since="time"></timeago>-->
    <br>
    <timeago :since="time" locale="zh-CN"></timeago>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>
<script>
  import HeadBar from '../components/HeadBar.vue';
  import parentCmp from '../components/parentCmp.vue';
  import Modal from '../components/Modal.vue'
  const now = new Date().getTime() - 60000*12;
  export default {
    components: {
      HeadBar,
      parentCmp,
      Modal
    },
    data() {
      return {
        title: '图书',
        time: now,
        showModal: false
      }
    }
  }
</script>
<style>

</style>

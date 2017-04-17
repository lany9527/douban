<template>
  <div>
    <button-tab v-model="tabIndex">
      <button-tab-item
        v-for="(type, index) in tabs"
        :key="index"
        :selected="tabIndex === index"
        @on-item-click="changeIndex(tabIndex)">
        {{type.title}}
      </button-tab-item>
    </button-tab>
  </div>
</template>

<script>
  import { ButtonTab, ButtonTabItem } from 'vux'
  export default {
    components: {
      ButtonTab,
      ButtonTabItem
    },
    props: [
      'tabs'
    ],
    data () {
      return {
        tabIndex: 0
      }
    },
    methods: {
      changeIndex () {
        console.log('click index', this.tabIndex);
        this.$emit('changeTab', this.tabIndex);
      }
    },
  }
</script>
<style scoped>
  .vux-button-group > a {
    text-decoration: none;
  }
</style>

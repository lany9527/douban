<template>
  <div class="search-bar">
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      autoFixed="false"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel">
    </search>
  </div>
</template>
<script>
  import { Search } from 'vux'
  export default {
    components: {
      Search
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
  }
</script>
<style scoped>
  .search-bar {
    height: 46px;
  }
</style>
<template>
  <div>
    <x-header
      class="head-bar"
      :left-options="{showBack: showBack}"
      :right-options="{showMore: showMore}"
      @on-click-more="showMenus = true"
      style="background-color:#0e90d2;">{{title}}</x-header>
  </div>
</template>
<script>
  import { XHeader } from 'vux';
  export default {
    name: 'app-header',
    props: [
      'showBack',
      'showMore',
      'title'
    ],
    components: {
      'x-header':XHeader
    },
    data () {
      return {
        showMenus: false
      }
    }
  }
</script>
<style>
  .vux-header .vux-header-left a,
  .vux-header .vux-header-left button,
  .vux-header .vux-header-right a,
  .vux-header .vux-header-right button {
    color: #fff !important;
    font-size: 16px;
  }
  .vux-header .vux-header-left .left-arrow:before {
    border-color: #fff !important;
  }
</style>
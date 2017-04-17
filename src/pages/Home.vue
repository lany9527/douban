<template>
  <div class="home" :style="{height:getFullHeight}">
    <head-bar :showBack=false :showMore=false :title="title"></head-bar>
    <app-list></app-list>
    <!--<masker style="border-radius: 2px;" color="2d2d2d" :opacity="0.8">-->
      <!--<div class="m-img" style="height: 100%;"></div>-->
      <!--<div slot="content" class="m-title">-->
        <!--&#45;&#45;&#45;&#45;&#45;&#45; 每个人都有属于自己的电影 &#45;&#45;&#45;&#45;&#45;&#45;-->
        <!--<br/>-->
        <!--<router-link to="/movie" tag="a">-->
          <!--<x-button plain mini type="primary" style="border-radius:99px;color: #fff; border-color: #fff;margin-top: 40px">点击进入-->
          <!--</x-button>-->
        <!--</router-link>-->
      <!--</div>-->
    <!--</masker>-->
  </div>
</template>

<script>
  import { Masker, XButton } from 'vux'
  import HeadBar from '../components/HeadBar.vue';
  import AppList from '../components/AppList.vue';
  export default {
    name: 'hello',
    components: {
      Masker,
      HeadBar,
      AppList,
      XButton
    },
    computed: {
      getFullHeight: function () {
        let h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0)).toString() + "px";
        return (h);
      }
    },
    data () {
      return {
        title: '应用中心'
      }
    }
  }
</script>

<style scoped>
  .m-img {
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)
  }
  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .vux-masker-box{
    height: 100% !important;
  }
</style>

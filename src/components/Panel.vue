<template>
  <div class="news-item">
    <div style="margin: 10px;overflow: hidden;" v-for="item in movieList">
      <router-link :to="'/movie/subject/'+item.id">
        <masker style="border-radius: 2px;">
          <div class="m-img" :style="{backgroundImage: 'url(' + item.images.large + ')'}"></div>
          <div slot="content" class="m-title">
            {{item.title}}
            <br/>
            <span class="m-time">{{item.year}}</span>
          </div>
        </masker>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {Masker} from 'vux'
  import api from '../utils/api';
  export default {
    components: {
      Masker
    },
    props: [
      'movieList'
    ],
    data () {
      return {
        type: '1',
      }
    },

  }
</script>
<style scoped>
  .news-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
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

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
</style>
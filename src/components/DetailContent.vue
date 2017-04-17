<template>
  <!--<div slot="content" class="card-padding">
    <p class="movie-summary">
      {{movieData.summary}}
    </p>
    <p>tab-button</p>
    <divider>评分 {{movieData.rating.average}}</divider>
    <p>{{movieData.ratings_count}}人评价</p>
    <rater :max="10" v-model="movieData.rating.average" slot="value" active-color="#04BE02" disabled></rater>
    <divider>导演</divider>
    <p class="movie-directors">{{movieData.directors.map((item) => item.name
    )}}</p>
    <divider>主演</divider>
    <p class="movie-actors">{{movieData.casts.map((item) => item.name)}}</p>
    <divider>类型</divider>
    <p class="movie-actors">{{movieData.genres.map((item) => item)}}</p>
    <divider>别名</divider>
    <p class="movie-actors">{{movieData.aka.map((item) => item)}}</p>
  </div>-->
  <card v-if="movieData">
    <img slot="header" :src="movieData.images.large" style="width:100%;display:block;">
    <div slot="content" class="card-padding">
      <tab-button :tabs="tabs" @changeTab="handleChageTab"></tab-button>
      <div v-if="currentTab === 'summary'" class="movie-summary">
        <divider>剧情</divider>
        <p>{{movieData.summary}}</p>
        <divider>类型</divider>
        <span class="movie-casts-text"
          v-for="(item,i) in movieData.genres">
          {{item}}{{i < (movieData.genres.length - 1) ? '、':''}}
        </span>
        <divider>别名</divider>
        <p class="movie-casts-text" v-for="item in movieData.aka">{{item}}</p>
      </div>
      <div v-else-if="currentTab === 'rating'" class="movie-rating">
        <p>评分 {{movieData.rating.average}}</p>
        <rater :max="10" v-model="movieData.rating.average" slot="value" active-color="#04BE02" disabled></rater>
        <p>{{movieData.ratings_count}}人评价</p>
      </div>
      <div v-else="currentTab === 'crew'" class="movie-casts">
        <divider>导演</divider>
        <grid :rows="4">
          <grid-item v-for="(item,i) in movieData.directors" :key="i">
            <img :src="item.avatars.small" alt="">
            <p>{{item.name}}</p>
          </grid-item>
        </grid>
        <divider>主演</divider>
        <grid :rows="4">
          <grid-item v-for="(item,i) in movieData.casts" :key="i">
            <img :src="item.avatars.small" alt="">
            <p>{{item.name}}</p>
          </grid-item>
        </grid>
      </div>
    </div>
  </card>
</template>

<script>
  import {Card, Divider, Grid, GridItem, GroupTitle, Rater} from 'vux';
  import TabButton from './TabButton.vue';

  export default {
    data() {
      return {
        tabs: [
          {title: '电影简介', tag: 'summary'},
          {title: '综合评分', tag: 'rating'},
          {title: '导演\/演员', tag: 'crew'}
        ],
        currentTab:'summary'
      }
    },
    props: [
      'movieData'
    ],
    components: {
      Card,
      Divider,
      Grid,
      GridItem,
      GroupTitle,
      Rater,
      TabButton
    },
    methods: {
      handleChageTab(tag){
        console.log("change tab-->",this.tabs[tag].tag);
        this.currentTab = this.tabs[tag].tag
      }
    },
    mounted() {
      if (this.movieData){
        console.log(this.movieData.casts)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  .card-padding {
    padding: 15px;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .weui-grid{
    color: black;
    text-decoration: none;
    font-size: 12px;
  }
  .vux-divider {
    padding-bottom: 0;
  }
  .weui-grid:before,
  .weui-grid:after,
  .weui-grids:before,
  .weui-grids:after {
    border:none;
  }
  .movie-casts-text{
    text-align: left;
  }
</style>

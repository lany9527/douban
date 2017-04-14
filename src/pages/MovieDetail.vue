<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <card>
      <img slot="header" :src="movieData.images.large" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p class="movie-summary">
          {{movieData.summary}}
        </p>
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
      </div>
    </card>
  </div>
</template>
<script>
  import {Card, Divider, Rater} from 'vux';
  import HeadBar from '../components/HeadBar.vue';
  import api from '../utils/api';
  export default {
    components: {
      Card,
      HeadBar,
      Divider,
      Rater
    },
    data() {
      return {
        title: '影片详情',
        id: this.$route.params.id,
        movieData: '',
        data41: 3.7,
      }
    },
    mounted() {
      console.log("电影id--》", this.id);
      this.getMovieDetail(this.id)
    },
    methods: {
      getMovieDetail(id) {
        api.Movie.getMovieDetail(id).then(res => {
          console.log(res.data);
          this.movieData = res.data;
        })
      }
    }
  }
</script>
<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-padding {
    padding: 15px;
  }

  .movie-summary,
  .movie-directors,
  .movie-actors {
    font-size: 14px;
    line-height: 1.2;
    text-indent: 2em;
    text-align: left;
  }
  .weui-panel {
     margin-top: 0;
  }
</style>
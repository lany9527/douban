<template>
  <div>
    <head-bar :showBack=true :showMore=true :title="title"></head-bar>
    <detail-content :movieData="movieData"></detail-content>
    <!--<card>
      <img slot="header" :src="movieData.images.large" style="width:100%;display:block;">
      <detail-content :movieData="movieData"></detail-content>
    </card>-->
  </div>
</template>
<script>
  import HeadBar from '../components/HeadBar.vue';
  import DetailContent from '../components/DetailContent.vue';
  import api from '../utils/api';
  export default {
    components: {
      HeadBar,
      DetailContent
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

</style>

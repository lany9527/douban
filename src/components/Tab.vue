<template>
  <div>
    <tab
      class="tab-bar"
      :line-width=2
      active-color='#fc378c'
      v-model="index">
      <tab-item class="vux-center"
                v-for="(item, index) in list2"
                :key="index">
        {{item.title}}
      </tab-item>
    </tab>

    <loading v-model="movieList.length > 0 ?  !show : show" :text="text"></loading>

    <swiper v-model="index" class="news-swiper" :height="getFullHeight" :show-dots="false">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div :style="{height:getFullHeight}" class="tab-swiper vux-center">
          <panel :movieList="movieList"></panel>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Loading, Tab, TabItem, Swiper, SwiperItem} from 'vux'
  import Panel from './Panel.vue';
  import NewsList from './NewsList.vue';
  import api from '../utils/api';
  const list = () => [
    {
      title: '正在热映',
      type: 'in_theaters'
    },
    {
      title: '即将上映',
      type: 'coming_soon'
    },
    {
      title: 'Top250',
      type: 'top250'
    },
    {
      title: '北美榜',
      type: 'us_box'
    }
  ]
  export default {
    components: {
      Loading,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Panel,
      NewsList
    },
    data () {
      return {
        list2: list(),
        select: '精选',
        index: 0,
        movieList: [],
        show: true,
        text: 'loading...'
      }
    },
    watch: {
      index: function (newindex, oldindex) {
        console.log("newindex", "oldindex");
        console.log(newindex, "--------", oldindex);
        console.log("当前标题：", this.list2[newindex].type);
        this.getByType(this.list2[newindex].type)
      }
    },
    computed: {
      getFullHeight: function () {
        let h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 90).toString() + "px";
        return (h);
      }
    },
    mounted () {
      console.log("mounted",this.show);
      this.getByType("in_theaters")
    },
    methods: {
      getByType(type) {
        console.log("getByType===>", type);
        this.movieList = [];
        api.Movie.getMovieByType(type).then(res => {
          if (type === 'us_box') {
            let subjects = [];
            res.data.subjects.map((item, index) => {
              if (item.subject) {
                item = item.subject;
                Object.assign(item, item.subject);
              }
              subjects.push(item);
              res.data.subjects = subjects;
            });
            this.movieList = res.data.subjects;
          } else {
            this.movieList = res.data.subjects;
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';

  .box {
    padding: 15px;
  }

  .tab-swiper {
    position: relative;
  }

  .vux-slider .vux-swiper {
    position: relative;
    overflow: scroll !important;
  }

  .tab-swiper, vux-center {
    overflow: scroll;
  }
</style>
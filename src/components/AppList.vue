<template>
  <div>
    <grid>
      <grid-item v-for="(item, index) in appList" :key="index">
        <router-link :to=item.name tag="a">
          <icon :name=item.icon scale="2" :color=colors[index]></icon><br>
          {{item.title}}
        </router-link>
      </grid-item>
    </grid>
  </div>
</template>
<script>
  import {Grid, GridItem} from 'vux';
  import 'vue-awesome/icons/book'
  import 'vue-awesome/icons/film'
  import 'vue-awesome/icons/music'
  import 'vue-awesome/icons/map-marker'
  import 'vue-awesome/icons/bullseye'
  const list = () => [
    {title: '图书', name: 'book', icon: 'book'},
    {title: '同城', name: 'asset', icon: 'map-marker'},
    {title: '音乐', name: 'product', icon: 'music'},
    {title: '电影', name: 'movie', icon: 'film'},
    {title: '广播', name: 'message', icon: 'bullseye'},
  ];
  const color = () =>  [
    "#0e90d2",
    "#dd514c",
    "#5eb95e",
    "#F37B1D",
    "#3bb4f2"
  ];
  export default {
    components: {
      Grid,
      GridItem
    },
    data () {
      return {
        appList: list(),
        colors: color(),
        show: true
      }
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>
<style scoped>
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
    color: #666;
  }

</style>
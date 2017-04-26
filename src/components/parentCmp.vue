<template>
  <div>
    <!--<h1>我是父组件的标题</h1>
    &lt;!&ndash;有分发内容&ndash;&gt;
    <child-cmp>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </child-cmp>
    &lt;!&ndash;无分发内容&ndash;&gt;
    <child-cmp>
    </child-cmp>
    &lt;!&ndash;
        作用域插槽
        2.1.0 新增
    &ndash;&gt;
    <child-cmp>
      <template scope="props">
        <p>hello from parent</p>
        <p>{{props.text}}</p>
      </template>
    </child-cmp>
    &lt;!&ndash;具名 Slot&ndash;&gt;
    <app-layout>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </app-layout>
    &lt;!&ndash;作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每一项：&ndash;&gt;
    <my-awesome-list :items="list">
      &lt;!&ndash; 作用域插槽也可以是具名的 &ndash;&gt;
      <template slot="item" scope="props">
        <li class="my-fancy-item">{{ props.text }}</li>
      </template>
    </my-awesome-list>-->
    <div class="dad">
      <div v-for="(item, i) in num"
           class="son"
           :style="{backgroundColor: color[i]}"
           :class="son+(i+1)">{{item}}</div>
      <!--<div class="son son2">son2</div>
      <div class="son son3">son3</div>-->
    </div>
  </div>
</template>

<script>
  import childCmp from './childCmp.vue';
  import AppLayout from './AppLayout.vue';
  import MyAwesomeList from './MyAwesomeList.vue'
  export default {
    components: {
      childCmp,
      AppLayout,
      MyAwesomeList
    },
    data() {
      return {
        list: [{text:'aaa'}, {text:'bbb'}, {text:'ccc'}, {text:'ddd'}],
        son: 'son',
        color: [
          'greenyellow','tomato','cadetblue','greenyellow','tomato','cadetblue','greenyellow','tomato','cadetblue','greenyellow','tomato','cadetblue','greenyellow','tomato','cadetblue','greenyellow','tomato','cadetblue'
        ],
        num: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      }
    }
  }
</script>

<style scope>
  .dad {
    background-color: #666666;
    border-radius: 20px;
    width: 100%;
    height: 500px;

    /*flex*/
    display: flex;
    /*flex-direction: column;*/
    /*flex-direction: row-reverse;*/
    /*justify-content: space-around;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    align-content: space-around;
    /*是否换行*/
    flex-wrap: wrap;
  }
  .son {
    border-radius: 10px;
    color: #333;
    /*min-width: 80px;*/
    /*min-height: 80px;*/
    /*flex-basis: 80px;*/
    height: 100px;
  }
  .son:nth-child(odd) {
    /*flex: 1;*/
    flex-basis: 80px;
    flex-grow: 1;
  }
  .son:nth-child(even) {
    /*flex: 2;*/
    flex-basis: 100px;
    flex-grow: 2;
  }
</style>

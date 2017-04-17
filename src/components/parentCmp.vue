<template>
  <div>
    <h1>我是父组件的标题</h1>
    <!--有分发内容-->
    <child-cmp>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </child-cmp>
    <!--无分发内容-->
    <child-cmp>
    </child-cmp>
    <!--
        作用域插槽
        2.1.0 新增
    -->
    <child-cmp>
      <template scope="props">
        <p>hello from parent</p>
        <p>{{props.text}}</p>
      </template>
    </child-cmp>
    <!--具名 Slot-->
    <app-layout>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </app-layout>
    <!--作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每一项：-->
    <my-awesome-list :items="list">
      <!-- 作用域插槽也可以是具名的 -->
      <template slot="item" scope="props">
        <li class="my-fancy-item">{{ props.text }}</li>
      </template>
    </my-awesome-list>

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
        list: [{text:'aaa'}, {text:'bbb'}, {text:'ccc'}, {text:'ddd'}]
      }
    }
  }
</script>

<style>

</style>

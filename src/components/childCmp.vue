<template>
  <div>
    <h2>我是子组件的标题</h2>
    <!--<slot>-->
      <!--child-cmp slot&#45;&#45;只有在没有要分发的内容时才会显示。-->
    <!--</slot>-->
    <slot text="hello from child">child-cmp slot 只有在没有要分发的内容时才会显示</slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>

<template>
  <div class="app-main">
    <MainHeader></MainHeader>
    <example-wztables></example-wztables>
  </div>
</template>

<script>
import MainHeader from './website/header.vue'
import ExampleWztables from '../examples/wz-tables.vue'

export default {
  components: {
    MainHeader,
    ExampleWztables
  }
}
</script>

<style lang="less">
@import './website/styles.less';
.app-main {
  padding: 0 80px;
}
</style>




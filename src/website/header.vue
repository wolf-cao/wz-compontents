<template>
  <div class="header">
    <span class="logo">组件 | components</span>
  </div>
</template>

<style lang="less" scoped>
@import './fonts.less';
.header {
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid @GrayLine;
  font-size: @MainTitleSize;
  overflow: hidden;
  padding: 0 80px;
  position: fixed;
  z-index: 999;
  background-color: @white;
  width: 100%;

  .logo {
    float: left;
  }
}
</style>


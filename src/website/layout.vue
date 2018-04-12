<template>
  <div class="app-main">
    <main-header></main-header>
    <div class="wrapper">
      <main-menus></main-menus>
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './header.vue'
import MainMenus from './menus.vue'
import MainFooter from './footer.vue'
export default {
  components: { MainHeader, MainMenus, MainFooter }
}
</script>

<style lang="less">
@import './styles.less';
.app-main {
  .wrapper {
    overflow: hidden;
  }
}
</style>


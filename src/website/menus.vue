<template>
  <ul class="menus">
    <li class="menu-item" v-for="(item, index) in menus" :key="index" v-if="item">
      <router-link :to="`/components/${item}`">{{ item }}</router-link>
    </li>
  </ul>
</template>

<script>
import Components from '../../packages/index'
export default {
  data() {
    return {
      menus: []
    }
  },
  mounted() {
    this.menus = Object.values(Components).map(item => {
      if (typeof item !== 'function' && item.name !== 'wz-cus-list-item') {
        return item.name
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import './fonts.less';
.menus {
  float: left;
  margin: 40px 80px;

  .menu-item {
    a {
      padding: 15px 20px 15px 0;
      display: block;
      border-top: 2px solid @white;
      border-bottom: 2px solid @white;

      &:hover {
        border-bottom: 2px solid @Blue;
      }
    }
  }
}
</style>



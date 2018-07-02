<template>
  <div class="wz-siderlist-item" @click="chooseItem()">
    <div v-if="showtype==='singleData'" class="single-data" :class="{'active':activeStyle&&!showChecked,'activeCheck':showChecked&&itemData.checked}">
      <el-checkbox v-if="showChecked" v-model="checked"></el-checkbox>
      <slot></slot>
    </div>
    <div v-if="showtype==='MultiData'" class="Multi-data" :class="{'active':activeStyle}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
import Vue from 'vue'
export default {
  name: 'wz-sider-list-item',
  computed: {
    checked: {
      get() {
        return this.itemData.checked
      },
      set(value) {
        Vue.set(this.itemData, 'checked', value)
      }
    }
  },

  props: {
    showtype: {
      type: String,
      default: ''
    },
    activeStyle: '',
    itemData: '',
    showChecked: {
      type: Boolean,
      default: false
    },
    activeCheckStyle: ''
  },
  components: {
    ElCheckbox
  },
  methods: {
    chooseItem() {
      if (!this.itemData.checked) {
        Vue.set(this.itemData, 'checked', true)
      } else {
        Vue.set(this.itemData, 'checked', false)
      }
      this.$emit('click', this.itemData)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../src/website/styles.less';
.wz-siderlist-item {
  .single-data {
    padding-left: 20px;
    cursor: pointer;
    height: 65px;
    line-height: 65px;
    font-size: 16px;
    &:hover {
      color: #1488ff;
    }
    &.active {
      color: #20a0ff;
      border-right: 2px solid #20a0ff;
    }
    &.activeCheck {
      background: #d2ecff;
      border-bottom: 1px solid #ececec;
    }
  }
  .Multi-data {
    padding-left: 20px;
    cursor: pointer;
    height: 108px;
    font-size: 16px;
    border-bottom: 1px solid #ececec;
    &:hover {
      background: #d2ecff;
    }
    &.active {
      background: #d2ecff;
    }
  }
}
</style>


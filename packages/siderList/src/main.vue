<template>
  <div class="sider-list">
    <div class="sider-list-header">
      <span class="checkBoxAll">
        <el-checkbox v-if="showCheckedAll" v-model="checked" @change="checkboxChange"></el-checkbox>
      </span>
      <!-- 标题处插槽 -->
      <span class="header-name">
        <slot name="header-name"></slot>
      </span>
      <div slot="side">
        <div class="clickOut">
          <div class="sider-sort" @click="clickIcon" :class="{'nosearch':!showSearch}" v-if="showSort">
            <i class="fontfamily yd-icon-screeningse icon-screen"></i>
            <i class="el-icon-caret-bottom icon-sort" v-show="sortIcon"></i>
            <i class="el-icon-caret-top icon-sort" v-show="!sortIcon"></i>

          </div>
          <div class="sider-condition" v-if="contentShow" v-click-outside="searchBlur">
            <div class="sort-type name-sort" v-for="item in sortType" :key='item.id'>
              <span>{{item.name}}</span>
              <i class="fontfamily yd-icon-sort-up" @click="nameSortUp(item)" :class="{'changeColor':item.id=== flag&&flagName===1}"></i>
              <i class="fontfamily yd-icon-sort-down down-sort" @click="nameSortDown(item)" :class="{'changeColor':item.id=== flag&&flagName===-1}"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="searchs" v-if="showSearch">
        <wz-searcher type="normal" size='mini' :searchData="searchData" :searchKeys="searchKeys" @search="globalSearch"></wz-searcher>
      </div>
    </div>
    <div class="sider-list-body">
      <!-- 内容处插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
import Utils from '../../Utils'
import Vue from 'vue'
export default {
  name: 'wz-sider-list',
  props: {
    searchData: {
      type: Array,
      default: []
    },
    searchKeys: {
      type: Array,
      default: []
    },
    sortType: {
      type: Array,
      default: []
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    showSort: {
      type: Boolean,
      default: true
    },
    //控制多选框
    showCheckedAll: {
      type: Boolean,
      default: false
    },
    //当前列表中显示的数据
    sourceData: ''
  },
  data() {
    return {
      checked: false,
      message: 'wz-sider-list',
      contentShow: false,
      sortIcon: true,
      flagName: '',
      flagStatus: true,
      flag: '',
      checkedflag: ''
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  watch: {
    sourceData: {
      handler(newVal) {
        let checkNum = newVal.filter(item => {
          return item.checked
        })
        if (checkNum.length < newVal.length) {
          this.checked = false
          this.checkedflag = false
        } else if (checkNum.length === newVal.length) {
          this.checked = true
        }
      },
      deep: true
    },
    checked(newVal) {
      if (this.checkedflag) {
        this.searchData.map(item => {
          Vue.set(item, 'checked', newVal)
        })
      }
    }
  },
  components: {
    ElCheckbox
  },
  methods: {
    checkboxChange() {
      this.checkedflag = true
    },
    globalSearch(value) {
      this.$emit('searchResult', { value: value.data })
    },
    searchBlur() {
      this.flag = ''
      this.contentShow = false
      this.sortIcon = true
    },
    clickIcon() {
      this.flag = ''
      this.contentShow = !this.contentShow
      this.sortIcon = !this.sortIcon
    },
    //降序
    nameSortDown(val) {
      this.flag = val.id
      this.flagName = -1
      let data = Utils.sortby(this.searchData, {
        sortkey: val.type,
        reverse: this.flagName
      })
      this.$emit('sortResult', { data: data })
    },
    //升序
    nameSortUp(val) {
      this.flag = val.id
      this.flagName = 1
      let data = Utils.sortby(this.searchData, {
        sortkey: val.type,
        reverse: this.flagName
      })
      this.$emit('sortResult', { data: data })
    },
    statusSort() {
      this.flagStatus = !this.flagStatus
    }
  }
}
</script>

<style lang="less" scope>
.header-name {
  height: 100%;
}
.sider-list {
  height: 100%;
  padding-top: 65px;
  box-sizing: border-box;
  .sider-list-header {
    padding-left: 15px;
    position: relative;
    line-height: 65px;
    height: 65px;
    margin-top: -65px;
    background-color: rgba(32, 160, 255, 0.2);
    .sider-condition {
      position: absolute;
      width: 123px;
      min-height: 65px;
      z-index: 10;
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid #d3dce6;
      right: 4px;
      top: 54px;
      .sort-type {
        height: 47px;
        line-height: 47px;
        padding-left: 10px;
      }
    }
    .sider-sort {
      text-align: center;
      display: inline-block;
      width: 48px;
      height: 32px;
      line-height: 32px;
      background-color: #409eff;
      border-radius: 4px;
      position: absolute;
      right: 69px;
      top: 17px;
      cursor: pointer;
      &.nosearch {
        right: 10px;
      }
    }
    .icon-screen {
      font-size: 22px;
      color: #fff;
    }
    .icon-sort {
      font-size: 14px;
      color: #fff;
      opacity: 0.7;
    }
  }
  .sider-list-body {
    height: 100%;
    border: 1px solid #eff3f6;
  }
  .searchs {
    position: absolute;
    top: 1px;
    right: 10px;
  }
  .changeColor {
    color: #20a0ff;
  }
}
</style>



<template>
  <div class="wz-searcher">
    <el-input :placeholder="placeholder" v-model="search" v-if="type === 'simple'"></el-input>
    <div v-else v-click-outside="searchBlur">
      <el-button type="primary" @click="switchBtn" v-show="!isSearch">
        <i class="fontfamily yd-icon-search"></i>
      </el-button>
      <el-input ref="searchInput" :placeholder="placeholder" v-model="search" v-show="isSearch" :autofocus="isFocus"></el-input>
    </div>
  </div>
</template>

<script>
import Utils from '../../Utils'
import vClickOutside from 'v-click-outside'
// 单独引入element-ui的input,button组件
import ElInput from 'element-ui/lib/input'
import ElButton from 'element-ui/lib/button'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/button.css'

export default {
  name: 'wz-searcher',
  components: {
    ElInput,
    ElButton
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    type: {
      type: String,
      default: 'simple'
    },
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    searchData: {
      type: Array,
      default: []
    },
    searchKeys: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      search: '',
      isSearch: false,
      isFocus: false
    }
  },
  methods: {
    switchBtn() {
      this.isSearch = true
      this.isFocus = true
    },
    searchBlur() {
      this.isSearch = false
    }
  },
  watch: {
    search(val) {
      if (this.searchData.length < 1) return
      const data = JSON.parse(JSON.stringify(this.searchData))
      let result = data

      if (Utils.trim(val)) {
        result = []
        data.map(row => {
          const tmpArr = []
          this.searchKeys.map(item => {
            if (
              row[item] &&
              JSON.stringify(row[item]) !== '{}' &&
              row[item].toString().indexOf(val) > -1
            ) {
              const regex = new RegExp(val)
              row[`${item}Origin`] = row[item]
              row[item] = row[item]
                .toString()
                .replace(regex, `<em class="search-strong">${val}</em>`)
              tmpArr.push(row)
            }
          })
          if (tmpArr.length > 0) {
            result.push(tmpArr[tmpArr.length - 1])
          }
        })
      }
      this.$emit('search', { data: result, value: this.search })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../src/website/fonts.less';
.wz-searcher {
  height: 42px;
}
</style>

<style lang="less">
.search-strong {
  color: #f56c6c;
  font-weight: 700;
}
</style>



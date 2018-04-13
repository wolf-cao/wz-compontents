<template>
  <div class="main-content">
    <h2>组件例子1 (type: 'normal')</h2>
    <div style="width: 450px;">
      <wz-searcher type="normal" :searchData="sourceData1" :searchKeys="sourceKeys" @search="globalSearch1"></wz-searcher>
    </div>
    <ul class="demo-list">
      <li class="demo-list-item" v-for="(item, index) in resultData1" :key="index">
        <span class="demo-item-name" v-html="item.name"></span>
        <span class="demo-item-work" v-html="item.work"></span>
      </li>
    </ul>
    <h2>组件例子2 (type: 'single')</h2>
    <div style="width: 450px;">
      <wz-searcher :searchData="sourceData2" :searchKeys="sourceKeys" @search="globalSearch2"></wz-searcher>
    </div>
    <ul class="demo-list">
      <li class="demo-list-item" v-for="(item, index) in resultData2" :key="index">
        <span class="demo-item-name" v-html="item.name"></span>
        <span class="demo-item-work" v-html="item.work"></span>
      </li>
    </ul>
    <readme></readme>
  </div>
</template>

<script>
import Readme from '../packages/searcher/README.md'
export default {
  components: {
    Readme
  },
  methods: {
    globalSearch1(val) {
      this.resultData1 = val.data
    },
    globalSearch2(val) {
      this.resultData2 = val.data
    }
  },
  mounted() {
    this.resultData1 = this.sourceData1
    this.resultData2 = this.sourceData2
  },
  data() {
    return {
      resultData1: [],
      resultData2: [],
      sourceKeys: ['name', 'work'],
      sourceData1: [
        {
          name: 'who are you!',
          work: 'what are you doing'
        },
        {
          name: 'who1 are1 you1!',
          work: 'what1 are1 you1 doing1'
        },
        {
          name: 'who2 are2 you2!',
          work: 'what2 are2 you2 doing2'
        }
      ],
      sourceData2: [
        {
          name: 'who are you!',
          work: 'what are you doing'
        },
        {
          name: 'who1 are1 you1!',
          work: 'what1 are1 you1 doing1'
        },
        {
          name: 'who2 are2 you2!',
          work: 'what2 are2 you2 doing2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.demo-list {
  margin-top: 20px;
  width: 450px;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;

  .demo-list-item {
    overflow: hidden;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .demo-item-name,
    .demo-item-work {
      float: left;
      padding: 10px 20px;
      width: 150px;
    }

    .demo-item-work {
      width: 200px;
    }
  }
}
</style>

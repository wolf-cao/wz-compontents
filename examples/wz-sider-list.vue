<template>
  <div class="main-content">
    <h2>组件例子1/单条数据/按钮显示</h2>
    <div class="list-wrap">
      <wz-sider-list :showSearch="true" :searchData="data" :searchKeys="sourceKeys" @searchResult=resulteData @sortResult=sortResult :sortType="sortType">
        <span slot="header-name" style="height:100%" class="fundname">所有基金</span>
        <wz-sider-list-item showtype="singleData" :activeStyle="singleData===item.id" :itemData="item" v-for="item in datacopy" :key="item.id" @click="clickData">
          <span v-html="item.name"></span>
        </wz-sider-list-item>
      </wz-sider-list>
    </div>

    <h2>组件例子2/多行数据/按钮部分显示</h2>
    <div class="list-wrap">
      <wz-sider-list :searchData="data1" :showSearch="false" :searchKeys="sourceKeys" @searchResult=resulteData @sortResult=sortResult1 :sortType="sortType">
        <span slot="header-name" style="height:100%" class="fundname">所有基金</span>
        <wz-sider-list-item showtype="MultiData" :activeStyle="singleData===item.id" :itemData="item" :key="item.id" @click="clickData" v-for="item in data1">
          <div class="listData">
            <div class="progress-box1">
              <span class="type">{{item.type}}</span>
              <span class="namefund">{{item.namefund}}</span>
              <span class="username">{{item.name}}</span>
            </div>
            <div class="progress-box2">
              <span class="type">{{item.type}}</span>
              <span class="namefund">{{item.namefund}}</span>
              <span class="username">{{item.name}}</span>
            </div>
          </div>
        </wz-sider-list-item>
      </wz-sider-list>
    </div>
    <h2>组件例子3/单条数据/多选框显示</h2>
    <div class="list-wrap">
      <wz-sider-list :sourceData="datacopy" :showSearch="true" showCheckedAll :searchData="data" :searchKeys="sourceKeys" @searchResult=resulteData @sortResult=sortResult :sortType="sortType">
        <span slot="header-name" style="height:100%" class="fundname">所有基金</span>
        <wz-sider-list-item :showChecked="showChecked" showtype="singleData" :activeCheckStyle="singleData===item.id" :itemData="item" v-for="item in datacopy" :key="item.id" @click="clickData">
          <span v-html="item.name"></span>
        </wz-sider-list-item>
      </wz-sider-list>
    </div>
    <readme></readme>
  </div>
</template>

<script>
import Readme from '../packages/siderList/README.md'
import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
export default {
  components: {
    Readme,
    ElCheckbox
  },
  data() {
    return {
      showCheckedAll: true,
      showChecked: true,
      sortType: [
        {
          //分类的标记
          name: '按名字排序',
          id: 1,
          //分类的类型
          type: 'name'
        },
        {
          name: '按数量排序',
          id: 2,
          type: 'number'
        }
      ],
      sourceKeys: ['name', 'id'],
      datacopy: '',
      data: [
        {
          name: '71111',
          id: 1,
          number: 1
        },
        {
          name: '91111111111111',
          id: 2,
          number: 2
        },
        {
          name: '0111111111111',
          id: 3,
          number: 3
        }
      ],
      data1: [
        {
          name: '旺旺',
          type: '买入',
          number: '200股',
          namefund: '东风科技600081',
          id: 4
        },
        {
          name: '旺旺',
          type: '买入',
          number: '100股',
          namefund: '东风科技600071',
          id: 5
        }
      ],
      showtype: 'singleData',
      singleData: ''
    }
  },
  mounted() {
    this.datacopy = this.data
    this.singleData = this.datacopy[0].id
  },
  methods: {
    sortResult(data) {
      this.datacopy = data.data
    },
    sortResult1(data) {
      this.data1 = data.data
    },
    resulteData(value) {
      this.datacopy = value.value
    },
    clickData(value) {
      this.singleData = value.id
    }
  }
}
</script>
<style lang="less" scoped>
.main-content {
  .list-wrap {
    width: 320px;
    height: 700px;
    .fundname {
      font-size: 16px;
      color: #20a0ff;
    }

    .listData {
      height: 100%;
      .progress-box2 {
        overflow: hidden;
        .number {
          float: right;
          padding-right: 28px;
        }
      }
      .progress-box1 {
        padding-top: 20px;
        .type {
          color: red;
          width: 65px;
          font-size: 12px;
          display: inline-block;
          line-height: 16px;
        }
        .namefund {
          font-size: 16px;
          display: inline-block;
          line-height: 16px;
        }
        .username {
          font-size: 14px;
          float: right;
          padding-right: 28px;
        }
      }
    }
  }
}
</style>

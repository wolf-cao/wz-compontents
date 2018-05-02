<template>
  <div class="main-content">
    <wz-tables class="my-tables" :data="sourceData" :checked="true" :hasPagination="true" pageSize="7">
      <wz-table-column width="17%" label="产品名称" prop="name1" sortable>
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name1 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="17%" label="标的">
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name2 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="10%" label="类型">
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name3 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="17%" label="价格" prop="name4" filterable>
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name4 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="17%" label="数量">
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name5 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="10%" label="状态">
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name6 }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="10%" label="操作">
        <div slot-scope="props">
          <span class="table-span-item">{{ props.name7 }}</span>
        </div>
      </wz-table-column>
    </wz-tables>
    <readme></readme>
  </div>
</template>

<script>
import Readme from '../packages/tables/README.md'
export default {
  components: {
    Readme
  },
  data() {
    return {
      sourceData: [
        {
          name1: '基金产品名称1',
          name2: '投资标的名称1',
          name3: '现货投资1',
          name4: '1111111.21元',
          name5: '1111111股',
          name6: '变更失败1',
          name7: '操作 - 修改 - 1'
        },
        {
          name1: '基金产品名称2',
          name2: '投资标的名称2',
          name3: '现货投资2',
          name4: '2222222.21元',
          name5: '2222222股',
          name6: '变更失败2',
          name7: '操作 - 修改 - 2'
        },
        {
          name1: '基金产品名称3',
          name2: '投资标的名称3',
          name3: '现货投资3',
          name4: '3333333.21元',
          name5: '3333333股',
          name6: '变更失败3',
          name7: '操作 - 修改 - 3'
        },
        {
          name1: '基金产品名称4',
          name2: '投资标的名称4',
          name3: '现货投资4',
          name4: '4444444.21元',
          name5: '4444444股',
          name6: '变更失败4',
          name7: '操作 - 修改 - 4'
        },
        {
          name1: '基金产品名称5',
          name2: '投资标的名称5',
          name3: '现货投资5',
          name4: '5555555.21元',
          name5: '5555555股',
          name6: '变更失败5',
          name7: '操作 - 修改 - 5'
        },
        {
          name1: '基金产品名称6',
          name2: '投资标的名称6',
          name3: '现货投资6',
          name4: '6666666.21元',
          name5: '6666666股',
          name6: '变更失败6',
          name7: '操作 - 修改 - 6'
        },
        {
          name1: '基金产品名称7',
          name2: '投资标的名称7',
          name3: '现货投资7',
          name4: '7777777.21元',
          name5: '7777777股',
          name6: '变更失败7',
          name7: '操作 - 修改 - 7'
        },
        {
          name1: '基金产品名称8',
          name2: '投资标的名称8',
          name3: '现货投资8',
          name4: '8888888.21元',
          name5: '8888888股',
          name6: '变更失败8',
          name7: '操作 - 修改 - 8'
        },
        {
          name1: '基金产品名称9',
          name2: '投资标的名称9',
          name3: '现货投资9',
          name4: '9999999.21元',
          name5: '9999999股',
          name6: '变更失败9',
          name7: '操作 - 修改 - 9'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.main-content {
  .my-tables {
    width: 100%;

    .table-span-item {
      height: 60px;
      line-height: 60px;
      padding-left: 10px;
      display: block;
    }
  }
}
</style>

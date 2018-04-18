<template>
  <div class="main-content">
    <wz-tables class="my-tables" :data="sourceData">
      <wz-table-column width="13%" label="产品名称">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="13%" label="标的">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="8.5%" label="类型">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="11%" label="价格">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="10%" label="数量">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="8.5%" label="状态">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
        </div>
      </wz-table-column>
      <wz-table-column width="10%" label="操作">
        <div slot-scope="props">
          <span class="table-span-item">{{ props }}</span>
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
          name3: '现货投资',
          name4: '9876543.21元',
          name5: '1234567股',
          name6: '变更失败1'
        },
        {
          name1: '基金产品名称2',
          name2: '投资标的名称2',
          name3: '现货投资',
          name4: '2876543.21元',
          name5: '2234567股',
          name6: '变更失败2'
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

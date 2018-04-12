<template>
  <div class="main-content">
    <wz-cus-list>
      <wz-cus-list-item>
        <ul class="descp-title">
          <li class="title">我当然知道</li>
          <li class="date">2018-01-25</li>
        </ul>
        <ul class="descp-content">
          <li class="old-value">100万股</li>
          <li class="font-icon">
            <i class="fontfamily jiantouziyuan"></i>
          </li>
          <li class="new-value">10万股</li>
        </ul>
      </wz-cus-list-item>
      <wz-cus-list-item color="yellow">
        <ul class="descp-title">
          <li class="title">我当然知道</li>
          <li class="date">2018-01-25</li>
        </ul>
        <ul class="descp-content">
          <li class="old-value">100万股</li>
          <li class="font-icon">
            <i class="fontfamily jiantouziyuan"></i>
          </li>
          <li class="new-value">10万股</li>
        </ul>
      </wz-cus-list-item>
      <wz-cus-list-item color="green">
        <ul class="descp-title">
          <li class="title">我当然知道</li>
          <li class="date">2018-01-25</li>
        </ul>
        <ul class="descp-content">
          <li class="old-value">100万股</li>
          <li class="font-icon">
            <i class="fontfamily jiantouziyuan"></i>
          </li>
          <li class="new-value">10万股</li>
        </ul>
      </wz-cus-list-item>
      <wz-cus-list-item color="red">
        <ul class="change-logs">
          <li class="logs-item">
            <span class="item-label">变动日期</span>
            <span class="item-value">2018-01-25 13:22:22</span>
          </li>
          <li class="logs-item">
            <span class="item-label">变动前(%)</span>
            <span class="item-value">3.45</span>
          </li>
          <li class="logs-item">
            <span class="item-label">操作人</span>
            <span class="item-value">我不关心</span>
          </li>
          <li class="logs-item">
            <span class="item-label">变动后(%)</span>
            <span class="item-value">2.45</span>
          </li>
        </ul>
      </wz-cus-list-item>
      <wz-cus-list-item color="gray">
        <ul class="change-logs">
          <li class="logs-item">
            <span class="item-label">变动日期</span>
            <span class="item-value">2018-01-25 13:22:22</span>
          </li>
          <li class="logs-item">
            <span class="item-label">变动前(%)</span>
            <span class="item-value">3.45</span>
          </li>
          <li class="logs-item">
            <span class="item-label">操作人</span>
            <span class="item-value">我不关心</span>
          </li>
          <li class="logs-item">
            <span class="item-label">变动后(%)</span>
            <span class="item-value">2.45</span>
          </li>
        </ul>
      </wz-cus-list-item>
    </wz-cus-list>
    <readme></readme>
  </div>
</template>

<script>
import Readme from '../packages/cusList/README.md'
export default {
  components: {
    Readme
  },
  data() {
    return {
      sourceData: []
    }
  }
}
</script>

<style lang="less" scoped>
@import '../src/website/fonts.less';
.change-logs {
  overflow: hidden;
  max-width: 700px;

  .logs-item {
    float: left;
    width: 50%;
    overflow: hidden;
    padding-bottom: 30px;

    .item-label {
      color: @SubFont;
      float: left;
      width: 100px;
    }
    .item-value {
      float: left;
    }
  }
}

.descp-title {
  overflow: hidden;
  padding-bottom: 15px;

  .title {
    float: left;
  }

  .date {
    float: left;
    color: @PosFont;
    font-size: @SmallSize;
    padding: 2px 0 0 10px;
  }
}

.descp-content {
  overflow: hidden;

  .font-icon,
  .old-value,
  .new-value {
    float: left;
    color: @PosFont;
  }

  .new-value {
    color: @MainFont;
  }

  .font-icon {
    .fontfamily {
      font-size: @SmallSize;
      padding: 0 15px;
    }
  }
}
</style>

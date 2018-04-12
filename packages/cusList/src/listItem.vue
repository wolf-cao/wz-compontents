<script>
export default {
  name: 'wz-cus-list-item',
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },
  render(createElement) {
    const { color } = this
    const listItem = this.$slots.default
    const spanEl = <span class={`icon ${color}`} />

    return createElement(
      'li',
      {
        class: 'wz-cuslit-item'
      },
      [listItem, spanEl]
    )
  }
}
</script>

<style lang="less" scoped>
@import '../../../src/website/styles.less';
.wz-cuslit-item {
  padding-left: 30px;
  padding-bottom: 25px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 1px;
    height: 100%;
    border-left: 1px solid @GrayLine;
    position: absolute;
    left: 9px;
    top: 20px;
  }

  .icon {
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    position: absolute;
    left: 0;
    top: 1px;

    &::before {
      content: '';
      position: absolute;
      left: 5px;
      top: 5px;
      width: 8px;
      height: 8px;
      border-radius: 8px;
    }

    &.blue {
      background-color: rgba(64, 158, 255, 0.2);

      &::before {
        background-color: @Blue;
      }
    }

    &.green {
      background-color: rgba(103, 194, 58, 0.2);

      &::before {
        background-color: @Success;
      }
    }

    &.red {
      background-color: rgba(245, 108, 108, 0.2);

      &::before {
        background-color: @Danger;
      }
    }

    &.yellow {
      background-color: rgba(230, 162, 60, 0.2);

      &::before {
        background-color: @Warning;
      }
    }

    &.gray {
      background-color: rgba(144, 147, 153, 0.2);

      &::before {
        background-color: @SubFont;
      }
    }
  }
}
</style>


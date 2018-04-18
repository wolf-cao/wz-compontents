<script>
export default {
  name: 'wz-table-column',
  props: {
    width: {
      type: String
    },
    label: {
      type: String
    }
  },
  created() {
    this.$parent.store.commit('setHeader', {
      label: this.label,
      width: this.width
    })
  },
  render(createElement) {
    console.log(this, 'this')
    const columnItem = this.$scopedSlots.default
      ? this.$scopedSlots.default(this.label)
      : this.$slots.default

    return createElement(
      'div',
      {
        class: 'wz-table-column-item',
        style: {
          width: this.width
        }
      },
      [columnItem]
    )
  }
}
</script>

<style lang="less" scoped>
.wz-table-column-item {
  float: left;
}
</style>



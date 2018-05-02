export default {
  name: 'wz-table-column',
  props: {
    width: {
      type: String
    },
    label: {
      type: String
    },
    prop: {
      type: String
    },
    sortable: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      columnData: {}
    }
  },
  computed: {
    owner() {
      let parent = this.$parent
      while (parent && !parent.tableId) {
        parent = parent.$parent
      }
      return parent
    },
    getColumnData() {
      return this.columnData
    }
  },
  created() {
    this.$parent.store.commit('setHeader', {
      label: this.label,
      width: this.width,
      prop: this.prop,
      sortable: this.sortable,
      filterable: this.filterable
    })
  },
  mounted() {
    const currDataIndex = this.$el.parentNode.className.substring(
      this.$el.parentNode.className.length - 1
    )
    this.columnData = this.$parent.store.states.tableData[currDataIndex]
  },
  render(createElement) {
    const columnItem = this.$scopedSlots.default
      ? this.$scopedSlots.default(this.getColumnData)
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

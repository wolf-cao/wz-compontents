export default {
  name: 'wz-table-header',
  props: {
    store: {
      type: Object,
      required: true
    }
  },
  computed: {
    columnsLabels() {
      return this.store.states.header.label
    },
    columnsWidth() {
      return this.store.states.header.width
    }
  },
  methods: {
    getThColumns() {
      return this.columnsLabels.map((item, index) => {
        const style = { width: this.columnsWidth[index] }
        return (
          <div class="wz-table-header-th" style={style}>
            <span class="table-header-th-label">{item}</span>
          </div>
        )
      })
    }
  },
  render() {
    return <div class="wz-table-header-wrapper">{this.getThColumns()}</div>
  }
}

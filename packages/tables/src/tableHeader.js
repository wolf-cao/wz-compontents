import TableCheckbox from './tableCheckbox.vue'
export default {
  name: 'wz-table-header',
  components: { TableCheckbox },
  props: {
    store: {
      type: Object,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
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
      const { checked } = this
      return this.columnsLabels.map((item, index) => {
        const style = { width: this.columnsWidth[index] }
        const checkStyle = {
          width: '2%',
          minWidth: '29px'
        }
        const checkboxEl = checked ? (
          <div class="wz-table-header-th" style={checkStyle}>
            <div class="table-header-th-label">
              <table-checkbox />
            </div>
          </div>
        ) : null
        const headerEl = (
          <div class="wz-table-header-th" style={style}>
            <span class="table-header-th-label">{item}</span>
          </div>
        )
        return index < 1 ? [checkboxEl, headerEl] : headerEl
      })
    }
  },
  render() {
    return <div class="wz-table-header-wrapper">{this.getThColumns()}</div>
  }
}

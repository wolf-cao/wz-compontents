import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
export default {
  name: 'wz-table-header',
  components: { ElCheckbox },
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
    },
    checkAll() {
      return this.store.states.data.filter(item => !item.checked).length < 1
    }
  },
  methods: {
    checkAllEvent() {
      this.store.commit('toggleSelectAll')
      this.store.commit('swithCheckAll')
    },
    getThColumns() {
      return this.columnsLabels.map((item, index) => {
        const style = { width: this.columnsWidth[index] }
        const checkStyle = {
          width: '2%',
          minWidth: '29px'
        }
        const checkboxEl = this.checked ? (
          <div class="wz-table-header-th" style={checkStyle}>
            <div class="table-header-th-label">
              <el-checkbox
                on-change={this.checkAllEvent}
                value={this.checkAll}
              />
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

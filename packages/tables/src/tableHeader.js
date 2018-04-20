import Utils from '../../Utils'
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
    },
    getSortIndex() {
      return this.store.states.sortIndex
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
            <span
              class={[
                {
                  up: index === this.getSortIndex
                },
                'table-header-th-sort'
              ]}
              on-click={evt => this.sortBy(evt, index)}
            >
              <i class="fontfamily yd-icon-sort-up" />
              <i class="fontfamily yd-icon-sort-down" />
            </span>
            <span class="table-header-th-filter">
              <i class="fontfamily defuben" />
            </span>
          </div>
        )
        return index < 1 ? [checkboxEl, headerEl] : headerEl
      })
    },
    sortBy(evt, index) {
      this.store.commit('setSortIndex', index)
      if (Utils.hasClass(evt.target.parentNode, 'up')) {
        Utils.addClass(evt.target.parentNode, 'down')
        Utils.removeClass(evt.target.parentNode, 'up')
      } else if (Utils.hasClass(evt.target.parentNode, 'down')) {
        Utils.removeClass(evt.target.parentNode, 'down')
        Utils.removeClass(evt.target.parentNode, 'up')
      } else {
        Utils.addClass(evt.target.parentNode, 'up')
      }
    }
  },
  render() {
    return <div class="wz-table-header-wrapper">{this.getThColumns()}</div>
  }
}

import ElPagination from 'element-ui/lib/pagination'
import 'element-ui/lib/theme-chalk/pagination.css'
import ElIcon from 'element-ui/lib/icon'
import 'element-ui/lib/theme-chalk/icon.css'

export default {
  name: 'wz-table-footer',
  components: {
    ElPagination,
    ElIcon
  },
  props: {
    store: {
      type: Object,
      required: true
    }
  },
  render() {
    return (
      <div class="wz-table-footer">
        <el-pagination
          layout="prev, pager, next"
          total={this.store.states.originTableData.length}
          page-size={5}
          on-current-change={data => {
            this.store.commit('setCurrencyPage', data)
            this.store.commit('switchTableData')
          }}
        />
      </div>
    )
  }
}

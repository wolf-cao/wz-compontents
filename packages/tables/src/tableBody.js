import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
export default {
  name: 'wz-table-body',
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
    getData() {
      return this.store.states.tableData
    }
  },
  methods: {
    checkClickEvent(value) {
      this.store.commit('toggleSelectRow', value)
    },
    getRows(h) {
      return this.getData.map((item, index) => {
        const contentEl = this.$slots.default
        const style = {
          width: '2%',
          minWidth: '29px',
          lineHeight: '60px'
        }
        const checkboxEl = this.checked ? (
          <div class="wz-table-column-item" style={style}>
            <span class="wz-table-checkbox-item">
              <el-checkbox
                value={item.checked}
                on-change={() => {
                  this.checkClickEvent(index)
                }}
              />
            </span>
          </div>
        ) : null
        return h(
          'div',
          {
            class: `wz-table-row table___row___${index}`,
            key: `${Math.random()}__${index}`
          },
          [checkboxEl, contentEl]
        )
      })
    }
  },
  render(createElement) {
    return createElement(
      'div',
      {
        class: 'wz-table-body-wrapper'
      },
      [this.getRows(createElement)]
    )
  }
}

import TableCheckbox from './tableCheckbox.vue'
export default {
  name: 'wz-table-body',
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
  methods: {
    getRows(h) {
      const { checked } = this
      return this.store.states.data.map((item, index) => {
        const contentEl = this.$slots.default
        const style = {
          width: '2%',
          minWidth: '29px',
          lineHeight: '60px'
        }
        const checkboxEl = checked ? (
          <div class="wz-table-column-item" style={style}>
            <span class="wz-table-checkbox-item">
              <table-checkbox data={item} />
            </span>
          </div>
        ) : null
        return h(
          'div',
          {
            class: `wz-table-row table___row___${index}`
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

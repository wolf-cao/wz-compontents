export default {
  name: 'wz-table-body',
  props: {
    store: {
      type: Object,
      required: true
    }
  },
  methods: {
    getRows(h) {
      return this.store.states.data.map((item, index) => {
        const contentEl = this.$slots.default
        return h(
          'div',
          {
            class: `wz-table-row table___row___${index}`
          },
          [contentEl]
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

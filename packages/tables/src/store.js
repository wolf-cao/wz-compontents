const TableStore = function() {
  this.states = {
    data: [],
    header: {
      label: [],
      width: []
    },
    columns: [],
    selectAll: false
  }
}

TableStore.prototype.mutations = {
  setData(states, data) {
    states.data = data
  },
  setHeader(states, data) {
    const headerData = JSON.parse(JSON.stringify(states.header))
    states.header.width = headerData.width.concat(data.width)
    states.header.label = Array.from(
      new Set(headerData.label.concat(data.label))
    )
  },
  toggleSelectAll(states) {
    states.selectAll = !states.selectAll
  },
  toggleSelectRow(states, data) {
    states.data = states.data.map((item, index) => {
      if (data === index) {
        item.checked = !item.checked
      }
      return item
    })
    states.selectAll = states.data.filter(item => !item.checked).length < 1
  },
  swithCheckAll(states) {
    states.data = states.data.map(item => {
      item.checked = states.selectAll
      return item
    })
  }
}

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
  } else {
    throw new Error(`Action not found: ${name}`)
  }
}

TableStore.prototype.setColumns = function() {
  const states = this.states
  states.columns = states.data
}

export default TableStore

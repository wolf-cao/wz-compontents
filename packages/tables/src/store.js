import Vue from 'vue'
const TableStore = function() {
  this.states = {
    data: [],
    header: {
      label: [],
      width: []
    },
    columns: []
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
  modifyData(states, data) {
    Vue.set(data.data, data.changeKey, data.changeValue)
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

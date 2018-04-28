const TableStore = function() {
  this.states = {
    originTableData: [],
    tableData: [],
    header: {
      label: [],
      width: []
    },
    columns: [],
    selectAll: false,
    sortIndex: -1,
    pageData: {
      isShow: false,
      pageSize: 5,
      totalNum: 0,
      currNum: 1
    }
  }
}

TableStore.prototype.mutations = {
  setData(states, data) {
    states.originTableData = data
    states.tableData = data
    states.pageData.totalNum = data.length
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
    states.tableData = states.tableData.map((item, index) => {
      if (data === index) {
        item.checked = !item.checked
      }
      return item
    })
    states.selectAll = states.tableData.filter(item => !item.checked).length < 1
  },
  swithCheckAll(states) {
    states.tableData = states.tableData.map(item => {
      item.checked = states.selectAll
      return item
    })
  },
  setSortIndex(states, data) {
    states.sortIndex = data
  },
  setIsShowPagination(states, data) {
    states.pageData.isShow = data
  },
  setCurrencyPage(states, data) {
    states.pageData.currNum = data
  },
  setPageSize(states, data) {
    states.pageData.pageSize = data
  },
  switchTableData(states) {
    if (states.pageData.isShow) {
      states.tableData = states.originTableData.filter((item, index) => {
        return (
          index < states.pageData.currNum * states.pageData.pageSize &&
          index >= (states.pageData.currNum - 1) * states.pageData.pageSize
        )
      })
    }
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
  states.columns = states.tableData
}

export default TableStore

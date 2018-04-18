import WZtableColumn from '../tables/src/tableColumn'

WZtableColumn.install = Vue => {
  Vue.component(WZtableColumn.name, WZtableColumn)
}

export default WZtableColumn

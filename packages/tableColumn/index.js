import WZtableColumn from '../tables/src/tableColumn.vue'

WZtableColumn.install = Vue => {
  Vue.component(WZtableColumn.name, WZtableColumn)
}

export default WZtableColumn

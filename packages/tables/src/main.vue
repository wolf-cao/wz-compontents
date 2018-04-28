<template>
  <div>
    <div class="wz-tables">
      <table-header :store="store" :checked="checked"></table-header>
      <table-body :store="store" :checked="checked">
        <slot name="default"></slot>
      </table-body>
    </div>
    <table-footer :store="store"></table-footer>
  </div>
</template>

<script>
import TableStore from './store'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import TableFooter from './tableFooter'
import './styles.less'

export default {
  name: 'wz-tables',
  components: { TableHeader, TableBody, TableFooter },
  props: {
    data: {
      type: Array,
      default: []
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const store = new TableStore()
    return {
      store
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(values) {
        this.store.commit('setData', values)
        this.store.commit('switchTableData')
      }
    }
  }
}
</script>


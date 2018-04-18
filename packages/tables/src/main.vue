<template>
  <div class="wz-tables">
    <table-header :store="store"></table-header>
    <table-body :store="store">
      <slot></slot>
    </table-body>
  </div>
</template>

<script>
import TableStore from './store'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import './styles.less'

export default {
  name: 'wz-tables',
  components: { TableHeader, TableBody },
  props: {
    data: {
      type: Array,
      default: []
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
      }
    }
  }
}
</script>


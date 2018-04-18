<template>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  name: 'table-checkbox-item',
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    checked: {
      get() {
        return (this.data && this.data.checked) || false
      },
      set(changeValue) {
        const { data } = this
        this.$parent.store.commit('modifyData', {
          data,
          changeValue,
          changeKey: 'checked'
        })
      }
    }
  }
}
</script>

<template>
  <el-checkbox type="checkbox" :value="checked" />
</template>

<script>
import ElCheckbox from 'element-ui/lib/checkbox'
import 'element-ui/lib/theme-chalk/checkbox.css'
export default {
  name: 'table-checkbox-item',
  components: { ElCheckbox },
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

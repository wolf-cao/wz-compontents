<template>
  <div :style="styles" v-click-outside="outtest" ref="popWindow" data-status="init">
    popper window
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'popper-window',
  props: {
    left: {
      type: String
    },
    top: {
      type: String
    }
  },
  methods: {
    outtest() {
      if (this.$refs.popWindow.getAttribute('data-status') === 'init') return
      setTimeout(() => {
        this.$refs.popWindow.style.display = 'none'
        this.$refs.popWindow.setAttribute('data-status', 'init')
      }, 10)
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { left, top } = this
      this.styles = {
        position: 'absolute',
        left,
        top,
        border: '1px solid #000000'
      }
    })
  },
  data() {
    return {
      styles: {}
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  }
}
</script>

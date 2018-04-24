<template>
  <div class="main-content">
     <h2>组件例子</h2>
    <wz-bar-progress :percentage='number' :introduce="nameIntru" :cavWidth="cavWidthCopy"></wz-bar-progress>
    <readme></readme>
  </div>
</template>

<script>
import Readme from '../packages/barProgress/README.md'
export default {
  data() {
    return {
      number: 90,
      nameIntru: '介绍1',
      cavWidthCopy: '100'
    }
  },
  components: {
    Readme
  }
}
</script>
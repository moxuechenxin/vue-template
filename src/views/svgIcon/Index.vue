<template>
  <div id="module-svg-icon">
    <svg-icon icon-class="shoubing"></svg-icon>
    <svg-icon icon-class="yaogan"></svg-icon>
    {{ 1529939429077 | date('Y-M-D h:m:s') }}
  </div>
</template>

<script>
import { test1 } from '@/service/api/index'
export default {
  name: 'Module_svg-icon',
  data () {
    return {}
  },
  mounted () {
    test1()
  }
}
</script>

<style lang="scss">
#module-svg-icon {
  padding: 20px;

  .svg-icon {
    font-size: 28px;
  }
}
</style>

<template>
  <div class="export"></div>
</template>

<script>
import { jsonToExcel } from '@/utils'

export default {
  name: 'exportExcelEug',
  props: [
    'originData',
    'fileName'
  ],
  methods: {
    startExport () {
      jsonToExcel(this.originData, this.fileName)
    },
    buildDataSuccess () {
      this.$emit('buildDataSuccess')
    }
  },
  watch: {
    originData: {
      handler: function(newValue) {
        if (newValue.length) {
          this.originData = newValue
          this.buildDataSuccess()
        }
      },
      deep: true
    }
  }

}
</script>

<style>
.export {
  display: none;
}
</style>


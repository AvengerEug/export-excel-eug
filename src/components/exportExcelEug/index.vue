<template>
  <div class="export"></div>
</template>

<script>
import Utils from '@/utils'

export default {
  name: 'exportExcelEug',
  props: [
    'originData',
    'fileName'
  ],
  methods: {
    startExport () {
      Utils.jsonToExcel(this.originData, this.fileName)
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


<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#1e3a8a'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((asset) => (this.assets = asset))
      .finally(() => (this.isLoading = false))
  },
}
</script>

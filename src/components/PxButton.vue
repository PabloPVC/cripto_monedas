<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#2563eb'" :size="8" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClick() {
      this.$emit('custom-click')
    },
  },
}
</script>

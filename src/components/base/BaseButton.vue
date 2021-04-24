<template>
<button>{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton.vue',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

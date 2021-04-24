<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button @click.native="test" text="Купть" />
  </div>
</template>
<script lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  components: { BaseButton },
  methods: {
    test(): void {
      console.log('hi')
    }
  }
}
</script>

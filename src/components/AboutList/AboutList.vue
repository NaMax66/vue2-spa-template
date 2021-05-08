<template>
  <ul>
    <li v-for="item in aboutList" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script>
import AboutList from './AboutList';

export default {
  name: 'AboutList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    aboutList() {
      return AboutList.prepare(this.list)
    }
  }
}
</script>

<style scoped>

</style>

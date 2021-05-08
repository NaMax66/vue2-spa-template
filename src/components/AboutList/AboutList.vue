<template>
  <ul>
    <li v-for="item in aboutList" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script>
import AboutListModel from './AboutListModel';

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
      return AboutListModel.prepare(this.list)
    }
  }
}
</script>

<style scoped>

</style>

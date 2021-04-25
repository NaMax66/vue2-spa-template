<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button @click.native="onActionButton" text="Получить список"/>
    <div v-for="item in aboutList" :key="item.id">{{ item.title }}</div>
  </div>
</template>
<script>
import BaseButton from '@/components/base/BaseButton.vue'
import { mapState, mapActions } from 'vuex'
import prepareAboutList from '@/models/prepareAboutList'
import Vue from 'vue';

export default Vue.extend({
  components: { BaseButton },
  methods: {
    ...mapActions(['fetchList']),
    onActionButton() {
      this.fetchList({ mail: 'test@tets.ru', password: 123 })
    }
  },
  computed: {
    ...mapState(['list']),
    aboutList() {
      return prepareAboutList(this.list)
    }
  }
})
</script>

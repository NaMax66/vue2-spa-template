<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button @click.native="onActionButton" text="Получить список"/>
    <about-list :list="list" />
  </div>
</template>
<script>
import BaseButton from '@/components/base/BaseButton.vue'
import AboutList from '@/components/AboutList/AboutList.vue'

import { mapState, mapActions } from 'vuex'
import Vue from 'vue';

export default Vue.extend({
  components: {
    BaseButton,
    AboutList
  },
  methods: {
    ...mapActions(['fetchList']),
    onActionButton() {
      this.fetchList({ mail: 'test@tets.ru', password: 123 });
    }
  },
  computed: {
    ...mapState(['list']),
  }
})
</script>

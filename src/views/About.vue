<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button @click.native="onActionButton" text="Получить список" />
    <div v-for="item in aboutList" :key="item.id">{{ item.title }}</div>
  </div>
</template>
<script lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { mapState, mapActions } from 'vuex'
import prepareAboutList, { aboutListItem } from '@/models/prepareAboutList'

export default {
  components: { BaseButton },
  methods: {
    ...mapActions(['fetchList']),
    onActionButton(): void {
      this.fetchList({ mail: 'test@tets.ru', password: 123 });
    }
  },
  computed: {
    ...mapState(['list']),
    aboutList(): aboutListItem[] {
      // todo fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return prepareAboutList(this.list)
    }
  }
}
</script>

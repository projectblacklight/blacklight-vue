<template>
  <div>
    <h3><router-link :to="{ name: 'show', params: { id: this.item.id } }"><Title v-bind:item="item"></Title></router-link></h3>
    <PropertyList v-bind:item="item"></PropertyList>
  </div>
</template>

<script>
import Title from 'blacklight/result/title.vue'
import PropertyList from 'blacklight/result/property_list.vue'

export default {
  props: ['item'],
  components: {
    Title,
    PropertyList
  },
}
</script>

<style scoped>
</style>

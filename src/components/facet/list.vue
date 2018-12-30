<template>
  <div>
    <FacetItem v-for="facet in facets" v-bind:item="facet" />
  </div>
</template>

<script>

import FacetItem from 'blacklight/facet/item.vue'

export default {
  components: {
    FacetItem
  },
  props: ['facets']
}
</script>

<style scoped>
</style>

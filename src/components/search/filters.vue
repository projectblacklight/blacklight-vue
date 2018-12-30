<template>
  <div class="clearfix constraints-container" v-if="display">
    <h2 class="sr-only">Search Constraints</h2>

    <router-link :to="{ name: 'search'}" class="btn btn-primary">Start Over</router-link>

    <span class="constraints-label sr-only">You searched for:</span>
    <AppliedFilter v-for="item in filters" v-bind:item="item"/>
  </div>
</template>

<script>

import AppliedFilter from './appliedFilter'

export default {
  components: {
    AppliedFilter
  },
  props: [
    'filters'
  ],
  computed: {
    display: function() {
      return this.filters.length > 0 ||
        this.$route.params.filter && this.$route.params.filter != 'q='
    }
  }
}
</script>

<style>
.applied-filter .filter-name::after {
    color: #aaa;
    content: "❯";
    font-size: 90%;
    padding-left: 0.3em;
}
</style>

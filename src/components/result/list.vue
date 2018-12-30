<template>
  <ul>
    <li v-for="result in results">
      <ResultItem v-bind:item="result" />
    </li>
  </ul>
</template>

<script>

import ResultItem from './item'

export default {
  components: {
    ResultItem
  },
  props: ['results']
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}
</style>

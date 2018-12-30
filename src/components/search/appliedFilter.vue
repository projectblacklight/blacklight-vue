<template>
  <span class="btn-group applied-filter constraint filter filter-format">
    <span class="constraint-value btn btn-outline-secondary btn-disabled">
        <span class="filter-name">{{item.field}}</span>
        <span class="filter-value" :title="item.value">{{item.value}}</span>
    </span>

    <a class="btn btn-outline-secondary remove" :href="item.link" v-on:click.prevent="remove"><span class="remove-icon">✖</span>
      <span class="sr-only">Remove constraint {{item.field}}: {{item.value}}</span></a>
  </span>
</template>

<script>

export default {
  props: [
    'item'
  ],
  methods: {
    remove: function() {
      this.$parent.$parent.$emit('facet', this.item.link)
    }
  }
}
</script>

<style scoped>
</style>

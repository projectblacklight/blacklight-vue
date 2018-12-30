<template>
  <div class="sort-pagination">
    <template v-if="Object.keys(pages).length !== 0">
      <template v-if="totalCount === 0">
        No results matched your search.
      </template>
      <template v-else>
        <template v-if="pages.prev_page != null">
          <a href="#" v-on:click.prevent="prevPage">Previous</a>
        </template>
        <template v-else>
          Previous
        </template>
        | {{start}} - {{end}} of {{totalCount}} |
        <template v-if="pages.next_page != null">
          <a href="#" v-on:click.prevent="nextPage">Next</a>
        </template>
        <template v-else>
          Next
        </template>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: ['result'],
  computed: {
    pages: function() {
      return this.result.meta.pages
    },
    start: function () {
      return this.pages.offset_value + 1
    },
    end: function() {
      return Math.min(this.pages.offset_value + this.pages.limit_value, this.pages.total_count)
    },
    totalCount: function() {
      return this.pages.total_count
    }
  },
  methods: {
    prevPage: function() {
      this.$parent.$emit('page', this.pages.prev_page)
    },
    nextPage: function() {
      this.$parent.$emit('page', this.pages.next_page)
    }
  }
}
</script>

<style scoped>
.sort-pagination {
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1em;
  padding-bottom: 1em;
}
</style>

<template>
  <li>
    <span class="facet-label">
    <template v-if="removeUrl() !== undefined">
      {{value.attributes.label}}
      <a href="#" v-on:click.prevent="remove"><span class="remove-icon">✖</span></a>
    </template>
    <template v-else>
      <a href="#" v-on:click.prevent="setURL" v-html="value.attributes.label"></a>
    </template>
    </span>
    <span class="facet-count" v-bind:style="style">{{count}}</span>
  </li>
</template>

<script>
export default {
  props: ['value', 'size'],
  methods: {
    setURL: function() {
      // Escape encoded ampersands (%26) so they don't get decoded into &.
      const escapedUrl = this.url().replace(/%26/g, '%2526')
      this.$parent.$parent.$parent.$emit('facet', escapedUrl)
    },
    url: function() {
      return this.value.links.self
    },
    removeUrl: function() {
      return this.value.links.remove
    },
    remove: function() {
      this.$parent.$parent.$parent.$emit('facet', this.removeUrl())
    }
  },
  computed: {
    count: function() {
      return this.value.attributes.hits.toLocaleString()
    },
    style: function() {
      // Adding 1 for commas.
      return `width: ${this.size + 1}ch`
    }
  }
}
</script>

<style>
</style>

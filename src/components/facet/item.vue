<template>
  <div class="card">
    <h3 class="card-header collapse-toggle"
        v-bind:class="{ collapsed: !isActive }"
        v-on:click="toggle"><a v-on:click.prevent="" v-bind:href="'#' + item.id">{{item.attributes.label}}</a></h3>
    <div class="card-body" v-bind:class="{ collapse: !isActive }">
      <ul class="facet-values list-unstyled">
        <FacetValue v-for="value in item.attributes.items" v-bind:value="value" :size="size" />
      </ul>
    </div>
  </div>
</template>

<script>
import FacetValue from './value'

export default {
  components: {
    FacetValue
  },
  props: ['item'],
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle: function(e) {
      this.isActive = !this.isActive
    }
  },
  computed: {
    // The number of digits in the largest FacetValue for this Item.
    size: function() {
      if (this.item == null) {
        return
      }
      return Math.max(...this.item.attributes.items.map(x=>
        // find the number of digits
        Math.floor(Math.log(x.attributes.hits) / Math.log(10)) + 1
      ))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../bootstrap_overrides.scss';

  .collapse-toggle:after {
    content: "❯";
    float: right;
    transform: rotate(90deg);
  }
  .collapse-toggle.collapsed:after {
    transform: rotate(0deg);
    transition: transform 0.1s ease;
  }
  .card-header {
    font-size: 1rem;
    background-color: $card-background;
    a {
      color: $body-color;
    }
  }
  .card {
    margin-bottom: 1rem;
  }
  .card-body {
    padding: 1rem;
  }
</style>

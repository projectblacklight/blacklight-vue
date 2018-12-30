<template>
  <section class="container">
    <h1><Title v-bind:item="item"></Title></h1>
    <PropertyList v-bind:item="item"></PropertyList>
  </section>
</template>


<script>
import Title from './result/title.vue'
import PropertyList from './result/property_list.vue'

export default {
  components: {
    Title,
    PropertyList
  },
  data() {
    return {
      item: { attributes: {} }
    }
  },
  methods: {
    load: function() {
      const endpoint = `/catalog/${encodeURIComponent(this.$route.params.id)}`
      this.$http.get(endpoint).then(function(response){
          this.item = response.data.data
      }, function(error){
          console.error(error.statusText);
          alert("There was an error retrieveing this record")
      })
    }
  },
  watch: {
    '$route': {
      handler: 'load',
      immediate: true
    }
  }
}
</script>

<style scoped>
</style>

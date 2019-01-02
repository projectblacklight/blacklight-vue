<template>
  <div>
    <SearchControl v-model="q" />
    <div class="container">
      <Filters v-bind:filters="result.filters"/>
      <div class="row">
        <section class="col-md-9 order-last">
          <Pagination v-bind:result="result" />
          <ResultList v-bind:results="result.data" />
        </section>
        <section class="col-md-3">
          <FacetList v-bind:facets="result.facets" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>

import SearchControl from './search/searchControl'
import Result from './search/result'
import ResultList from './result/list'
import FacetList from './facet/list'
import Pagination from './search/pagination'
import Filters from './search/filters'

export default {
  components: {
    SearchControl,
    ResultList,
    FacetList,
    Filters,
    Pagination,
  },
  data: function () {
    return {
      q: '',
      result: new Result()
    }
  },
  methods: {
    // This is passed a solr query url and it transforms it to a frontend url
    solrUrlToPath: function(solrUrl) {
      return 'catalog/' + solrUrl.split('?', 2)[1]
    },
    retrieveResults: function(url) {
      this.$Progress.start()
      console.log(`get ${url}`)
      this.$http.get(url).then(function(response){
          this.result = new Result(response.data)
          this.$Progress.finish()
      }, function(error){
          console.error(error.statusText);
      });
    },
    load: function(route) {
      var filter = route.params.filter
      if (filter === undefined)
        filter = 'q='

      // Start over should clear the search input
      var query = filter.match(/q=([^&]*)/)
      // Get rid of any spaces that have been encoded as '+'
      this.q = query[1].replace(/\+/g, " ")

      this.retrieveResults('catalog?' + filter)
    }
  },
  computed: {
    links: function() {
      return this.result.links
    }
  },
  watch: {
    '$route': {
      handler: 'load',
      immediate: true
    }
  },
  created() {
    // Triggered when "search" is pressed
    this.$on('send', (text) => {
      this.$router.push(this.solrUrlToPath(`catalog?q=${text}`))
    })

    // Triggered when "next" or "previous" page is pressed
    this.$on('page', (page) => {
      var state
      if (this.links.self.match(/page=\d+/)) {
        state = this.links.self.replace(/page=\d+/, `page=${page}`)
      } else {
        state = `${this.links.self}&page=${page}`
      }
      this.$router.push(this.solrUrlToPath(state))
    })

    // Triggered when a facet value is pressed
    this.$on('facet', (url) => {
      this.$router.push(this.solrUrlToPath(url))
    })
  }
}
</script>

<style scoped>
</style>

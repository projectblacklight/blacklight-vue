<template>
  <span v-html="title"></span>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    title: function () {
      if (Object.keys(this.item.attributes).length === 0)
        return this.item.id
      return this.item.attributes[this.$titleField].attributes.value
    }
  }
}
</script>

<style scoped>
</style>

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
      if (this.item.type === 'Person')
        return this.item.attributes['name_tsim'].attributes.value

      return this.item.attributes['title_tesi'].attributes.value
    }
  }
}
</script>

<style scoped>
</style>

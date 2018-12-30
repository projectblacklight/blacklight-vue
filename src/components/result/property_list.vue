<template>
  <dl>
    <template v-for="(property, index) in item.attributes">
      <dt v-html="property.attributes.label"></dt>
      <dd v-html="property.attributes.value"></dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
</style>

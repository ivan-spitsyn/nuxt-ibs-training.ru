<script>
export default {
  name: 'Page'
}
</script>
<template>
  <div class="page">
    <slot />
  </div>
</template>
<style lang="scss">
.page {
  padding-top: 100px;
  overflow: hidden;
}
</style>
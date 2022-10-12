<script>
export default {
  name: 'Page'
}
</script>
<template>
  <div class="page">
    <slot/>
  </div>
</template>
<style lang="scss">
:root {
  --swiper-theme-color: #184188
}
.page {
  padding-top: 188px;
  overflow: hidden;
}

</style>
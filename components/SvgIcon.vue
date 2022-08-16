<template>
  <svg v-if="$props.id" :class="['svg-icon','svg-icon_' + $props.id]">
    <use :xlink:href="link"></use>
  </svg>
</template>
<style lang="scss">
.svg-icon {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  &:hover path {
    fill: #f26f21;
  }
}
</style>
<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  computed: {
    link() {
      //TODO не работает путь из assets
      return '/images/icons-sprite.svg#' + this.$props.id;
    }
  }
}
</script>
<template>
  <div class="button-group">
    <div v-if="$slots.label" class="button-group__label">
      <slot name="label"/>
    </div>
    <slot />
  </div>
</template>
<style lang="scss">
.button-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &__label {
    padding: 0 15px;
    @export text-p1;
  }
}
</style>
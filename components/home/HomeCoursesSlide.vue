<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
    default: ''
  },
  alt: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    required: true,
    default: '',
  },
});
</script>
<template>
  <div class="coursesSlide">
    <div class="coursesSlide__view">
      <nuxt-img format="webp" :src="props.image" :alt="props.title" />
    </div>
    <div class="coursesSlide__info mt-5">
      <div class="coursesSlide__title text-h5 text-center">{{props.title}}</div>
      <div class="coursesSlide__description">{{props.description}}</div>
    </div>
  </div>
</template>
<style lang="scss">
.coursesSlide {
  &__view {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {

  }
}
</style>
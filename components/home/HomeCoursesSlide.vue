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
    <div class="coursesSlide__info">
      <div class="coursesSlide__title">{{props.title}}</div>
      <div class="coursesSlide__description">{{props.description}}</div>
    </div>
  </div>
</template>
<style lang="scss">
.coursesSlide {

}
</style>
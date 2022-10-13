<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>
<template>
<div class="directionsSlide mt-10">
  <div class="directionsSlide__title">{{ title }}</div>
  <ul class="directionsSlide__links">
    <li v-for="item in items" :key="item.text" class="directionsSlide__link-box mb-1">
      <a :href="item.url" class="directionsSlide__link">{{ item.text }}</a>
    </li>
  </ul>
  <v-btn variant="outlined" class="mt-4 directionsSlide__button"   size="small">Узнать больше</v-btn>

</div>
</template>
<style lang="scss">
.directionsSlide {
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  overflow: hidden;

  &__title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 0;
    height: 60px;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: auto;
    list-style-type: none;
  }
  &__link-box {
    line-height: 1.6;
    color: inherit;
    text-decoration: none;
  }
  &__link {
    color: #ffffff;
    text-decoration: none;
    outline: transparent;
    &:hover {
      color: $color-link
    }
  }
  &__button {
    display: block;
    margin-top: 42px;
    margin-bottom: 0;
    visibility: hidden;
    outline: transparent;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }
  &:hover {
    .directionsSlide__button {
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;
    }
  }
}



.categories-course:hover .categories-course__link {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease;
}

</style>

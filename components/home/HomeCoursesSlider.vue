<script setup>
import { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue';
const modules = [Navigation]

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <swiper
    class="coursesSlider"
    :modules="modules"
    :loop="true"
    :autoplay="true"
    :navigation="true"
    :speed="1000"
    :slides-per-view="4"
    :slides-per-group="4"
    :space-between="30"
  >
    <swiper-slide
        class="coursesSlider__slide"
        v-for="item in props.items"
        :key="item.id">
      <home-courses-slide
          :image="item.image"
          :alt="item.alt"
          :title="item.title"
          :description="item.description"
      />
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.coursesSlider {
  &__slide {}
}
</style>
<script setup>
import { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/lazy';
import 'swiper/scss/navigation';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const modules = [Navigation,Lazy]
</script>
<template>
  <swiper class="servicesSlider"
          :modules="modules"
          :loop="true"
          :autoplay="true"
          :navigation="true"
          :lazy="true"
          :speed="1000"
          :slides-per-view="4"
          :slides-per-group="4"
          :space-between="30"
  >
    <swiper-slide
        class="servicesSlider__slide"
        v-for="item in props.items"
        :key="item.id">
      <HomeServicesSlide
          :image="item.image"
          :alt="item.alt"
          :title="item.title"
          :description="item.description"
      />
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.servicesSlider {
  padding: 30px!important;
  .swiper-button-prev {
    left: -2px;
  }
  .swiper-button-next {
    right: -2px;
  }
}

</style>
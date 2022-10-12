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
  overflow: visible;
  .swiper-button-prev, .swiper-button-next {
    width: 44px;
    height: 44px;
    background: #d3d3d370;
    border-radius: 50%;
    transition: all .25s ease-in-out;
    &:hover {
      background: #d3d3d3;
    }
    &::after {
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }
  }
  .swiper-button-prev {
    left: -50px;
  }
  .swiper-button-next {
    right: -50px;
  }
}

</style>
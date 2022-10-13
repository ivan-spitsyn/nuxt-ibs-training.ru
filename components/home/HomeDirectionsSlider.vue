<script setup>
import { Navigation, Lazy } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue';
import HomeDirectionsSlide from "~/components/home/HomeDirectionsSlide";

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
  <swiper class="directionsSlider"
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
        class="directionsSlider__slide"
        v-for="item in props.items"
        :key="item.id">
      <home-directions-slide
          :title="item.title"
          :items="item.items"
      />
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.directionsSlider {
  overflow: visible;
  &_slide {
    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: #fff;
    }
    &:last-of-type:after {
      background: transparent;
    }
  }
}
</style>

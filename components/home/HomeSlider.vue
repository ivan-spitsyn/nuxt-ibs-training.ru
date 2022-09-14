<script >
import { Lazy } from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/lazy';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const state = {
      isLoading: false
    }

    return {
      modules: [Lazy],
    };
  },
};
</script>
<template>
  <swiper class="homeSlider" :loop="true" :modules="modules" :lazy="true">
    <swiper-slide class="homeSlider__slider" v-for="slider in items" :key="`sldier-${slider.id}`">
      <a :href="slider.url" class="homeSlider__link" target="_blank">
        <div class="homeSlider__image-wrap" v-if="slider.type == 'image'">
          <img
              class="homeSlider__image swiper-lazy"
              :data-src="slider.image"
              :alt="slider.alt"
          >
        </div>
        <div class="homeSlider__video-wrap" v-else>
          <video class="homeSlider__video"  :poster="slider.poster" loop="" autoplay="" muted=""  >
            <source :src="slider.video" type="video/mp4">
          </video>
          <span class="homeSlider__title" v-html="slider.title" v-if="slider.title">
          </span>
        </div>
      </a>
    </swiper-slide>

  </swiper>
</template>
<style lang="scss" scoped >
.homeSlider {
  height: calc(85vh - 100px);
  max-height: 800px;
  background: #fafafa;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity .25s;
    &-wrap {
      height: 100%;
    }
    &.swiper-lazy-loaded {
      opacity: 1;
    }
  }
  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-wrap {
      transition: opacity .25s;
      height: 100%;
    }
  }
  &__link {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    outline: none;
  }
  &__slider {
    position: relative;
  }
  &__title {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 50px;
    text-align: center;
    text-shadow: 1px 1px 1px rgb(255 255 255 / 35%);
    @extend %text-h2;
    font-weight: bold;
  }
}

</style>

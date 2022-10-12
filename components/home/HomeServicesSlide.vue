<script setup>
import Button from "~/components/Button";

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
    default: ''
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
});
</script>
<template>
  <div class="servicesSlide">
    <div class="servicesSlide__view">
      <img
          class="servicesSlide__image swiper-lazy"
          :data-src="props.image"
          v-if="props.image"
          :alt="props.alt"
      />
    </div>
    <div class="servicesSlide__info">
      <div class="servicesSlide__title">{{ props.title }}</div>
      <div class="servicesSlide__hide">
        <div class="servicesSlide__description">{{ props.description }}</div>
        <Button class="servicesSlide__button">Подробнее</Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.servicesSlide {
  width: 100%;
  max-width: 420px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transform: translateY(0);
  margin: 0 auto;
  background: #fafafa;
  cursor: pointer;
  // transition: transform .25s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: transform 0.25s ease-in-out;

  &:before {
    content: '';
    background-color: #000000;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.25s ease-in;
    
    

  }

  &:hover {
    transform: translateY(-25px);
    &:before {
      opacity: 0.6;
    }
  }

  &__view {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
  }

  &__image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    padding: 25px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
  }
  &__title {
    text-align: center;
    font-size: 33px;
    font-weight: 600;
  }
  &__hide {
    height: 0;
    overflow: hidden;
    transition: 0.5s ease;
    opacity: 0;

    padding: 0 26px;
    margin: 0;
    font-weight: 200;
    line-height: 24px;

    border-top: 1px solid transparent;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &__button {
    cursor: pointer;
    border: none;
    color: white;
    position: relative;
    margin-top: 26px;

    font-size: 14px;
    text-transform: uppercase;
    padding: 9px 23px;
    font-weight: 600;
    min-width: 178px;
    box-shadow: none !important;

    border-radius: 3px;
    text-decoration: none;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      border: 1px solid #ffffff;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      pointer-events: none;
      border-radius: 3px;
      -ms-transform: matrix(1, 0, 0, 1, 0, 0);
      transform: matrix(1, 0, 0, 1, 0, 0);
      transition: 0.3s ease;
    }
    &:hover:after {
      -ms-transform: matrix(1.04, 0, 0, 1.04, 0, 0);
      transform: matrix(1.04, 0, 0, 1.04, 0, 0);
    }
  }

  &:hover & {
    &__hide {
      opacity: 1;
      height: 260px;
      border-top-color: rgba(255, 255, 255, 0.7);
      margin-top: 12px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
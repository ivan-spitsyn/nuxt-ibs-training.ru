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
<div class="directionsSlide">
  <div class="directionsSlide__title">{{ title }}</div>
  <ul class="directionsSlide__links">
    <li v-for="item in items" :key="item.text" class="directionsSlide__link-box">
      <a :href="item.url" class="directionsSlide__link">{{ item.text }}</a>
    </li>
  </ul>
  <Button class="directionsSlide__button" href="/">
    <span>Узнать больше</span>
  </Button>
</div>
</template>
<style lang="scss">
.directionsSlide {
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  overflow: hidden;

  &__title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 0;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-bottom: auto;
  }
  &__link-box {
    line-height: 1.6;
    color: inherit;
    text-decoration: none;
  }
  &__link {
    display: block;
    margin-top: 42px;
    margin-bottom: 0;
    visibility: hidden;
    opacity: 0;
    outline: transparent;
  }
}



.categories-course:hover .categories-course__link {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease;
}

</style>
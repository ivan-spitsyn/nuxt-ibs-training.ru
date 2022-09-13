<script>
import SvgIcon from "~/components/SvgIcon";

export default {
  components: {SvgIcon},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getItemClassByIndex: (index) => ['news-cards__item', index === 0 ? '_type-2-1' : index === 1 ? '_type-1-2' : '_type-1-1'],
    getImageClassByIndex: (index) => ['news-cards__item-image', index === 0 ? '_type-2-1' : index === 1 ? '_type-1-2' : '_type-1-1'],
    getImageTypeByIndex: (index) => index === 0 ? '2-1' : index === 1 ? '1-2' : '1-1',
  }
}
</script>
<template>
  <div class="news-cards">
    <div class="news-cards__list">
      <template v-for="(item, index) in items" :key="item.id">
        <div :class="getItemClassByIndex(index)">
          <div class="news-cards__item-view">
            <nuxt-img
                format="webp"
                :class="getImageClassByIndex(index)"
                :src="item.images[getImageTypeByIndex(index)]"
                :alt="item.title" />
          </div>
          <div class="news-cards__item-info">
            <NuxtLink :to="item.link" class="news-cards__item-link" :aria-label="item.title"></NuxtLink>
            <div class="news-cards__item-title">{{ item.title }}</div>
            <div class="news-cards__item-description">{{ item.description }}</div>
            <div class="news-cards__item-read-more">
              <div class="button _white"><span>Подробнее</span></div>
            </div>
            <div class="news-cards__item-date">{{ item.date }}</div>
          </div>
        </div>
      </template>
      <div class="news-cards__item _type-1-1 _type-more">
        <NuxtLink to="/blog/" class="news-cards__item-link" aria-label="Блог"></NuxtLink>
        <div class="news-cards__item-info">
          <div class="news-cards__item-view-all">
            Читать<br> <b>Блог</b>
            <SvgIcon id="chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.news-cards {
}

.news-cards__list {
  width: 100%;
  display: inline-block;
}

.news-cards__item {
  float: left;
  position: relative;
  margin-bottom: 60px;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s ease;
}

.news-cards__item:hover {
  -ms-transform: matrix(1.05, 0, 0, 1.05, 0, 0);
  transform: matrix(1.05, 0, 0, 1.05, 0, 0)
}

.news-cards__item + .news-cards__item {
  margin-left: 4%;
}

.news-cards__item._type-2-1 {
  width: 22%;
  height: 0;
  padding-bottom: 49%;
}

.news-cards__item._type-1-1 {
  width: 22%;
  height: 0;
  padding-bottom: 22.6%;
}

.news-cards__item._type-1-2 {
  width: 48%;
  height: 0;
  padding-bottom: 22.6%;
}

.news-cards__item._type-more {
  border: 1px solid #e5e5e5;
}

.news-cards__item:nth-child(1) {
}

.news-cards__item:nth-child(2) {
}

.news-cards__item:nth-child(3) {
}

.news-cards__item:nth-child(4) {
}

.news-cards__item:nth-child(5) {
}

.news-cards__item-view {
  display: block;
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 0;
}

.news-cards__item-image {
  display: none;
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news-cards__item._type-2-1 .news-cards__item-image._type-2-1 {
  display: block;
}

.news-cards__item._type-1-2 .news-cards__item-image._type-1-2 {
  display: block;
}

.news-cards__item._type-1-1 .news-cards__item-image._type-1-1 {
  display: block;
}

.news-cards__item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  padding: 36px 10px 44px 24px;

  color: #fff;
  z-index: 1;
}

.news-cards__item-link {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.news-cards__item-title {
  font-size: 22px;
  font-weight: 600;
}

.news-cards__item-description {
  margin-top: 12px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.3;
}

.news-cards__item-category {
  margin-top: 10px;
  font-size: 17px;
  font-weight: 200;
  text-transform: uppercase;
}

.news-cards__item-read-more {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease;
  position: absolute;
  right: 10px;
  bottom: 16px;
}

.news-cards__item:hover .news-cards__item-read-more {
  visibility: visible;
  opacity: 1;
}

.news-cards__item-date {
  font-size: 17px;
  margin-top: auto;
  margin-bottom: 0;
  text-transform: uppercase;
  position: absolute;
  bottom: 16px;
  left: 16px;
}

.news-cards__item-view-all {
  position: absolute;
  display: block;
  width: 140px;
  bottom: 30px;
  right: 30px;
  color: #003263;
  font-size: 30px;

  .svg-icon {
    width: 18px;
    height: 20px;
    position: absolute;
    top: 12px;
    right: 0;
  }
}

.news-cards__item-view-all b {
  font-weight: 600;
}
</style>
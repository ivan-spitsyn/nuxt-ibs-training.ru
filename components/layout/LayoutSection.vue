<script>
export default {
  name: 'Section',
  props: {
    modifier: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    cssClass() {
      return 'section-box' + (this.$props.light ? ' section-box_light' : '')
    },
    imageSrc() {
      return this.$props.image ? `/assets/images/components/section/${this.$props.image}.jpg` : null
    }
  }
}
</script>
<template>
  <component :is="$props.image ? 'v-parallax' : 'div'" :src="imageSrc" :class="cssClass" >
    <v-container>
      <div v-if="$slots.header || $slots.title" class="section-box__header">
        <h2 v-if="$slots.title" class="section-box__title text-h2 my-10"><slot name="title"/></h2>
        <div v-if="$slots.subTitle" class="section-box__subtitle"><slot name="subTitle"/></div>
        <slot name="header" />
      </div>
      <div v-if="$slots.default" class="section-box__content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="section-box__footer">
        <slot name="footer" />
      </div>
    </v-container>
  </component>
</template>
<style lang="scss">
.section-box {
  padding: 0 0 48px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // &__container {
  //   width: 100%;
  //   max-width: 1730px;
  //   margin: 0 auto;
  //   //TODO переписать под стандартные mq
  //   @media (max-width: $media-laptop) {
  //     max-width: 1430px;
  //     padding-left: 10px;
  //     padding-right: 10px;
  //   }
  //   @media (max-width: $media-tablet-large) {
  //     max-width: 1260px;
  //     padding-left: 10px;
  //     padding-right: 10px;
  //   }
  //   @media (max-width: $media-tablet) {
  //     max-width: 720px;
  //     padding-left: 10px;
  //     padding-right: 10px;
  //   }
  //   @media (max-width: $media-mobile) {
  //     max-width: 540px;
  //     padding-left: 10px;
  //     padding-right: 10px;
  //   }
  // }
  &__header {
    text-align: center;
    & + .section-box__content {
      margin-top: 48px;
    }
  }
  &__title {
    @extend %text-h1;
    font-weight: 200;
    color: $color-brand-blue;
    b { font-weight: 600; }
   &._light {
     color: $color-text-light;
   }
  }
  &__subtitle {
    margin-top: 20px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 20px;
    color: #444444;
    line-height: 1.4;
    &._light {
      color: $color-text-light;
    }
  }
  &__content {
    &._hidden {
      display: none;
    }
  }
  &__inner {
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1570px;
  }
  &__footer {
    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0 0;
      max-width: 400px;
      margin: 0 auto;
    }
  }
  &_socials-and-questions {
    padding-top: 80px;
    padding-bottom: 80px;
    background: #eee;
  }
  &_slider {
    padding-top: 0;
    padding-bottom: 0;
  }
  &_groups-courses {

  }
  &_certificate-group {
    background: #eee;
  }
  &_news {
    background-color: #ffffff;
  }
  &_solutions {
  }
  &_callback-contacts {
    background: #e3e3e3;
  }
  // &_subscribe {
  //   background-image: url("@/assets/images/components/section/subscribe.jpg");
  // }
  // &_categories-course {
  //   background-image: url("@/assets/images/components/section/course-categories.jpg");
  // }
  // &_callback-mini-background {
  //   background-image: url("@/assets/images/components/section/callback-mini.jpg");
  // }
  // &_footer-description {
  //   background:#ffffff url('@/assets/images/components/section/dark-2.png') bottom repeat-x;
  // }
}
</style>

<script>
export default {
  name: 'Section',
  props: {
    modifier: {
      type: String,
      default: ''
    }
  },
  computed: {
    cssClass() {
      return 'section-box' + (this.$props.modifier ? ' section-box_' + this.$props.modifier : '')
    },
  }
}
</script>
<template>
  <section :class="cssClass">
    <div class="section-box__container">
      <div v-if="$slots.header || $slots.title" class="section-box__header">
        <div class="section-box__title"><slot name="title"/></div>
        <slot name="header" />
      </div>
      <div v-if="$slots.default" class="section-box__content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="section-box__footer">
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section-box {
  padding: 32px 0 48px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &__container {
    width: 100%;
    max-width: 1730px;
    margin: 0 auto;
    //TODO переписать под стандартные mq
    @media (max-width: 1729px) {
      max-width: 1430px
    }
    @media (max-width: 1439px) {
      max-width: 1260px
    }
    @media (max-width: 767px) {
      max-width: 720px
    }
    @media (max-width: 576px) {
      max-width: 540px
    }
  }
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
   &._white {
     color: #fff;
   }
  }
  &__subtitle {
    margin-top: 20px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 20px;
    color: #444444;
    line-height: 1.4;
    &._white {
      color: #fff;
    }
  }
}

.section-box__content._hidden {
  display: none;
}

.section-box__inner {
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 1570px;
}

.section-box__footer {

}

.section-box__footer._button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0;
  max-width: 400px;
  margin: 0 auto;
}

.section-box {
  &_footer-description {
    background:#ffffff url('~/assets/images/components/section/dark-2.png') bottom repeat-x;
  }
  &_socials-and-questions {
    padding-top: 80px;
    padding-bottom: 80px;
    background: #eee;
  }
}

.section-box._slider {
  padding-top: 0;
  padding-bottom: 0;
}

.section-box._groups-courses {

}

.section-box._categories-course {
  background-image: url("/local/assets/css/../images/background_section-course-categories.jpg");
}

.section-box._solutions {
}

.section-box._callback-mini-background {
  background-image: url("/local/assets/css/../images/background_section-callback-mini.jpg");
}

.section-box._certificate-group {
  background: #eee;
}

.section-box._news {
  background-color: #ffffff;
}

.section-box._subscribe {
  background-image: url("/local/assets/css/../images/background_section-subscribe.jpg");
}

.section-box._callback-contacts {
  background: #e3e3e3;
}
</style>
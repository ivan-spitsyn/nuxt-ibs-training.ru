<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="item in items" :key="$md5Hash(item.link + item.name)" class="navigation__item">
        <NuxtLink :href="item.link" class="navigation__link">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.navigation {
  &__list {
    display: flex;
    padding-left: 0;
    list-style-type: none;
    margin-right: 44px;
  }
  &__item {
    margin-right: 46px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  &__link {
    font-size: 20px;
    color: #1c427a;
    text-decoration: none;
  }
}
.navigation_footer {
  .navigation {
    &__list {
      flex-direction: column;
      margin: 0;
    }
    &__item {
      margin: 0;
    }
    &__link {
      @extend %text-p3;
      color: $color-brand-turquoise;
    }
  }
}
</style>
<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<template>
  <ol v-if="$props.items" vocab="http://schema.org/" typeof="BreadcrumbList" class="breadcrumbs">
    <li
        v-for="(breadcrumb, index) in $props.items"
        :key="$md5Hash(breadcrumb.link + breadcrumb.text)"
        class="breadcrumbs__item"
        property="itemListElement"
        typeof="ListItem"
    >
      <nuxt-link
          class="breadcrumbs__link"
          property="item"
          typeof="WebPage"
          :to="breadcrumb.link"
      >
        <span property="name">{{ breadcrumb.text }}</span>
      </nuxt-link>
      <svg class="breadcrumbs__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
      <meta property="position" :content="index + 1" />
    </li>
  </ol>
</template>
<style lang="scss">
.breadcrumbs {
  width: 100%;
  height: 24px;
  padding: 0;
  margin: 40px 0 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;

  color: #eeeeee;
  &__item {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    &:last-of-type {
      .breadcrumbs__icon {
        display: none;
      }
    }
  }
  &__link {
    color: inherit;
    text-decoration: none;
  }
  &__icon {
    width: 13px;
  }
}
</style>

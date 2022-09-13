<script setup>
import Section from '~/components/layout/LayoutSection.vue';
import Breadcrumbs from '~/components/layout/LayoutBreadcrumbs.vue';

const route = useRoute();
const breadcrumbs = ref(getBreadcrumbsFromMatched(route.matched));
watch(() => route.matched, (matched, oldMatched, onCleanup) => {
  breadcrumbs.value = getBreadcrumbsFromMatched(route.matched)
});

function getBreadcrumbsFromMatched(matched) {
  const firstItem = {
    link: '/',
    text: 'Главная'
  }
  const breadcrumbs = matched.map((match) => ({
    link: match.path,
    text: match.meta.title
  }))
  return [firstItem, ...breadcrumbs]
}
</script>
<template>
  <div class="top-bar">
    <Section>
      <div class="top-bar__breadcrumbs">
        <Breadcrumbs :items="breadcrumbs" />
      </div>
      <h1 class="top-bar__title">{{ route.meta.title }}</h1>
    </Section>
  </div>
</template>
<style lang="scss">
.top-bar {
  background: url('~/assets/images/components/TopBar/default.jpeg') center 0;
  background-size: cover;
  &__title {
    color: #fff;
    font-size: 30px;
    line-height: 1.2;
  }
}
</style>

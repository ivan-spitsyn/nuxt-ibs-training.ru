<template>
  <LayoutPageContent>
    <LayoutSection>
      <template #title>Новости - <b>Статьи</b> - Блог</template>
      <HomeBlog :items="items"/>
    </LayoutSection>
  </LayoutPageContent>
</template>
<script setup>
definePageMeta({
  title: 'Главная',
  layout: 'home-page',
})

const {data: items} = useAsyncData(() => $fetch('/api/blogTop'))
</script>
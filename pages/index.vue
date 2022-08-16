<script setup>
definePageMeta({
  title: 'Главная',
  description: 'Обучение для программистов, аналитиков, менеджеров проектов: тренинги, курсы, бесплатные семинары и вебинары, конференции',
  layout: 'home-page',
})

const {data: items} = useAsyncData(() => $fetch('/api/blogTop'))
</script>
<template>
  <LayoutPageContent>
    <LayoutSection>
      <template #title>Новости - <b>Статьи</b> - Блог</template>
      <HomeBlog :items="items"/>
    </LayoutSection>
  </LayoutPageContent>
</template>

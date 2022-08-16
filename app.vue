<template>
  <NuxtLayout>
    <Head>
      <Title>{{route.meta.title}}</Title>
      <Meta name="description" :content="route.meta.description" />
    </Head>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const route = useRoute();
useHead({
  titleTemplate: '%s | IBS Training Center',
})
</script>
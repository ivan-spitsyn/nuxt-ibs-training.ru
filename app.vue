<template>
  <NuxtLayout>
    <Head>
      <Title>{{route.meta.title}}</Title>
      <Meta name="description" :content="route.meta.description" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
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

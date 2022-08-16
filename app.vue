<template>
  <NuxtLayout>
    <Head>
      <Title>{{route.meta.title}}</Title>
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
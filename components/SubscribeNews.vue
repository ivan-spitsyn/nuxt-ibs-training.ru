<template>
  <div class="subscribe-news d-flex align-center justify-center">
    <v-text-field class="subscribe-news__field"
                  variant="outlined"
                  label="E-mail"
                  single-line="false"
                  bg-color="#ffffff"
    >
      <template v-slot:append>
        <v-btn class="subscribe-news__button mb-5"
               color="primary"
        >Подписаться</v-btn>
      </template>
    </v-text-field>
  </div>
</template>
<style lang="scss">
.subscribe-news {
  &__field {
    width: 100%;
    max-width: 60%;
    margin-right: 16px;

  }
  &__button {
    width: 100%;
    max-width: 200px;
  }
}
</style>

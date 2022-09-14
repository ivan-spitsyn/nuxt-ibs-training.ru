<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
})
</script>
<template>
  <div class="search">
    <v-container fluid>
      <v-row class="align-center">
        <v-col cols="3">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Какое обучение вы ищете?"
            single-line
            outlined
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="9">
          <div class="search-phrase">
            <ul class="search-phrase__list">
              <li v-for="item in props.items" class="search-phrase__item" :key="item.id">
                <a :href="item.url" class="search-phrase__link">{{item.text}}</a>
              </li>
            </ul>
          </div>
        </v-col>
      <!-- <form action="/search/">
        <v-text-field
            v-model="message4"
            label="Outlined"
            outlined
            clearable
            placeholder="Какое обучение вы ищете?"
          ></v-text-field>

      </form> -->
    
      </v-row>
    </v-container>
  </div>
</template>
<style scoped lang="scss">

.search-phrase {
  margin-left: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.search-phrase{
  &__list {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  &__item {
    margin-left: 28px;
    white-space: nowrap;
    line-height: 1.6;
  }
  &__link {
    color: #333;
    text-decoration: none;
  }


}

div.title-search-result {
  max-width: 100%;
}


</style>

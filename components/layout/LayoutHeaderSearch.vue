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
  <div class="search container">
    <div class="search__form">
      <form action="/search/">
        <input class="search-main"
               type="text"
               autocomplete="off"
               placeholder="Какое обучение вы ищете?"
        >
        <input type="submit" value="" name="submit">
      </form>
      <div id="search-dropdown"></div>
    </div>
    <div class="search-phrase">
      <ul class="search-phrase__list">
        <li v-for="item in props.items" class="search-phrase__item">
          <a :href="item.url" class="search-phrase__link">{{item.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
}

.search-phrase {
  margin-left: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.search-phrase__label {
}

.search-phrase__list {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}

.search-phrase__item {
  margin-left: 28px;
  white-space: nowrap;
  line-height: 1.6;
}

.search-phrase__link {
  color: #333;
}

.search__form form {
  background: #fff;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #eee;
  width: 530px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
}

.search__form .search-main {
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0 10px;
  border: none;
  outline: transparent;
  box-sizing: border-box;
  width: 100%;
}

.search__form input[name=submit] {
  display: block;
  border: none;
  outline: transparent;
  width: 80px;
  /*background: url("/local/assets/css/../images/icons/search_form.svg") center / auto 60% no-repeat;*/
  cursor: pointer;
}
div.title-search-result {
  max-width: 100%;
}

</style>

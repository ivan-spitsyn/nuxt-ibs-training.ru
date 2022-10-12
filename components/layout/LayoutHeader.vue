<script setup>
import SvgIcon from "~/components/SvgIcon";
import { ref, onMounted, reactive  } from 'vue'
const {data: navigation} = useAsyncData(() => $fetch('/api/menu/header'))
const {data: searchList} = useAsyncData(() => $fetch('/api/search/headerPhrase'))


const state = reactive({
  previousPosition: 0,
  headerVisible: false,
})

const onScroll  = () => {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (state.previousPosition > currentPosition ) {
      state.headerVisible = false;
    } else {
      state.headerVisible = true;
  }
  state.previousPosition = currentPosition
}
onMounted(() => {
   window.addEventListener('scroll', onScroll );
})
</script>
<template>
  <div class="header">
    <div class="header__box header__box_main  px-4">
      <nuxt-link to="/" class="header__logo" aria-label="IBS Training Center">
        <img class="header__logo-image" src="/images/logo.svg" alt="IBS Training Center">
      </nuxt-link>
      <div class="header__main">
        <div class="header__navigation">
          <LayoutNavigation :items="navigation" />
        </div>
        <div class="header__controls">
          <div class="header__control header__control_search">
            <SvgIcon id="header-search" />
          </div>
          <a href="/contacts/" class="header__control header__control_contact" aria-label="Контакты">
            <SvgIcon id="header-contact" />
          </a>
          <div class="header__control header__control_nav">
            <SvgIcon id="header-navigation" />
          </div>
        </div>
      </div>
    </div>
    <div class="header__box _search  px-4">
    </div>
    <div class="header__box header__box_search" :class="{'hide' : state.headerVisible}">
      <LayoutHeaderSearch :items="searchList" />
    </div>
  </div>
</template>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  z-index: 999;


  &__box {  
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_main {
      position: relative;
      background: #fff;
      height: 100px;
      z-index: 1;
    }
    &_search {
      display: block;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      background: #e3e3e3;
      transition: all 0.25s ease;
      transform: translateY(0);
      &.hide {
        transform: translateY(-100%);
      }
    }
  }

  &__logo {}
  &__logo-image {
    display: block;
    width: 100%;
    max-width: 228px;
  }
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__controls {
    display: flex;
    justify-content: flex-start;
  }
  &__control {
    width: 44px;
    height: 44px;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 15px;
    cursor: pointer;
    &:hover svg path {
      fill: #f26f21;
    }
    &_search {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      background-color: #ececee;
      border-radius: 4px;
      border: 1px solid #cccccc;
      .svg-icon {
        width: 18px;
        height: 18px;
      }
    }
    &_nav {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 8px;
      margin-right: 0;
      margin-left: 46px;
      cursor: pointer;
    }
  }
}
</style>

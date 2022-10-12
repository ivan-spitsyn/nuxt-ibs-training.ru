<script setup>
import SvgIcon from "~/components/SvgIcon";

const {data: navigation} = useAsyncData(() => $fetch('/api/menu/header'))
const {data: searchList} = useAsyncData(() => $fetch('/api/search/headerPhrase'))

</script>
<template>
  <div class="header">
    <div class="header__box header__box_main">
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
    <div class="header__box _search">
    </div>
    <div class="header__box header__box_search">
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
  padding: 0 48px;
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  z-index: 999;


  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_main {
      height: 100px;
    }
    &_search {
      display: block;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      background: #e3e3e3;
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

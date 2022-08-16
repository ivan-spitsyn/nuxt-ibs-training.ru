<template>
  <div class="social-list">
    <a class="social-list__item social-list__item_vk"
       target="_blank" href="https://vk.com/ibs_training_center"
       aria-label="Вконтакте"
    >
      <SvgIcon id="social-vk" />
    </a>
    <a class="social-list__item social-list__item_youtube"
       target="_blank" href="https://www.youtube.com/c/IBSTrainingCenter"
       aria-label="YouTube"
    >
      <SvgIcon id="social-youtube" />
    </a>
    <a class="social-list__item social-list__item_telegram"
       target="_blank" href="https://t.me/IBS_Training_Center"
       aria-label="Телеграм"
    >
      <SvgIcon id="social-telegram" />
    </a>
    <a class="social-list__item social-list__item_dzen"
       target="_blank" href="https://zen.yandex.ru/id/62285a96cbc61a17d6cec4b8"
       aria-label="Яндекс Дзен"
    >
      <SvgIcon id="social-dzen" />
    </a>
  </div>
</template>
<style lang="scss">
.social-list {
  display: flex;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    margin-right: 15px;
    background-color: #fff;
    border: 1px solid #cccdd7;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 50%;
    &:last-of-type {
      margin-right: 0;
    }

    .svg-icon {
      max-width: 36px;
    }

    &_vk {}
    &_youtube {}
    &_telegram {}
    &_dzen {}
  }
}



.social-list__item._vk {
  background-image: url("/local/assets/css/../images/icons/social-vk.svg")
}

.social-list__item._tw {
  background-image: url("/local/assets/css/../images/icons/social-twitter.svg")
}

.social-list__item._yt {
  background-image: url("/local/assets/css/../images/icons/social-youtube.svg")
}

.social-list__item._in {
  background-image: url("/local/assets/css/../images/icons/social-linkedin.svg")
}

.social-list__item._fb {
  background-image: url("/local/assets/css/../images/icons/social-facebook.svg")
}

.social-list__item._telegram {
  background-image: url("/local/assets/css/../images/icons/social-telegram.png");
  background-size: cover;
}

.social-list__item._dzen {
  background-image: url("/local/assets/css/../images/icons/social-dzen.png");
  background-size: cover;
}
</style>
<script>
import SvgIcon from "./SvgIcon";
export default {
  components: {SvgIcon}
}
</script>
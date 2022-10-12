<script setup>
import Navigation from "~/components/layout/LayoutNavigation";
const navigation = [
  { link: '/information/', text: 'Сведения об образовательной организации' },
  { link: '/about/company-details/', text: 'Реквизиты' },
  { link: '/sitemap/', text: 'Карта сайта' },
  { link: '/terms-of-use/', text: 'Условия использования' },
  { link: '/privacy-policy/', text: 'Политика в сфере персональных данных' },
]
const year = (new Date).getFullYear()
</script>
<template>
  <footer class="footer">
    <layout-section class="footer__description">
      Оценка и обучение ИТ-специалистов по ключевым направлениям разработки программного обеспечения. Курсы от
      экспертов-практиков по языкам программирования, системному и бизнес-анализу, архитектуре ПО, ручному и
      автоматизированному тестированию ПО, Big Data и машинному обучению, управлению проектами и Agile. Действует скидка
      10% на обучение физических
      лиц.
    </layout-section>
    <layout-section class="footer__socials-and-questions">
      <div class="d-flex align-center justify-space-between">
        <SocialList/>
        <div class="d-flex align-center justify-space-between">
          <p class="pr-4">Остались вопросы?</p>
          <v-btn variant="outlined" href="/contacts/"><b>Связаться</b> с нами</v-btn>
        </div>
      </div>
    </layout-section>
    <layout-section>
      <div class="footer__row">
        <div class="footer__col">
          <Navigation class="navigation_footer" :items="navigation" />
        </div>
        <div class="footer__col">
          <div class="footer-company-info" itemscope="" itemtype="http://schema.org/Organization">
            <span class="footer-company-info__name" itemprop="name">IBS Training Center</span>
            <div class="footer-company-info__block footer-company-info__block_contacts">
              <NuxtLink class="footer-company-info__title" href="/contacts/">Контакты:</NuxtLink>
              <div class="footer-company-info__contacts">
                <a class="footer-company-info__contact footer-company-info__contact_phone"
                   itemprop="telephone" href="tel:84956096967">+7 (495) 609-6967</a>
                <a class="footer-company-info__contact footer-company-info__contact_email"
                   itemprop="email" href="mailto:education@ibs.ru">education@ibs.ru</a>
              </div>
            </div>
            <div class="footer-company-info__block footer-company-info__block_address">
              <p class="footer-company-info__title">Адрес:</p>
              <p class="footer-company-info__address"
                 itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                <span itemprop="postalCode"> 123060</span>, <span itemprop="addressLocality">Москва</span>,
                <span style="display: inline-block" itemprop="streetAddress">1-й Волоколамский проезд, д. 10, стр. 3, БЦ "Диапазон"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__row">
        <div class="footer__copyright">© {{year}} IBS, all rights reserved</div>
      </div>
    </layout-section>
  </footer>
</template>
<style lang="scss">
.footer {
  position: relative;
  background: $color-brand-blue;
  z-index: 99;

  &__description {
    @extend %text-p1;
    padding-top: 32px;
    padding-bottom: 32px;

    background-size: cover;
    background-position: center;
    background-repeat: repeat-x;
    background-color: #ffffff;
    background-image: url('@/assets/images/components/section/dark-2.png');
  }

  &__socials-and-questions {
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: $color-brand-grey;
  }

  &__row {
    display: flex;
    justify-content: flex-start;
  }

  &__col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fff;
    padding: 10px 0 10px 40px;
    margin-left: 42px;
    border-left: 1px solid #fff;

    &:first-of-type {
      padding-left: 0;
      margin-left: 0;
      border: none;
    }
  }
  &__copyright {
    @extend %text-ps;
    color: #c9deef;
  }
  @media (max-width: $media-tablet) {
    .footer__row {
      flex-direction: column;
    }
    .footer__col {
      margin-left: 0;
      padding-left: 0;
      padding-right: 0;
      border: none;
    }
  }
}
.footer-company-info {
  &__name {
    display: none;
  }
  &__block {
    margin-bottom: 10px;
  }
  &__title {
    display: inline-block;
    margin-bottom: 5px;

    @extend %text-p2;
    font-weight: 600;
    text-decoration: none;
    color: $color-brand-turquoise;
  }
  &__contacts {}
  &__contact {
    margin-right: 10px;
    @extend %text-p3;
    text-decoration: none;
    color: $color-text-light;
  }
  &__address {
    @extend %text-p3;
  }
}
</style>

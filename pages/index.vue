<script setup>
import LayoutPageContent from '@/components/layout/LayoutPageContent.vue';
import LayoutSection from '@/components/layout/LayoutSection.vue';
import HomeSlider from '@/components/home/HomeSlider.vue';
import HomeServicesSlider from "~/components/home/HomeServicesSlider";
import HomeDirectionsSlider from "~/components/home/HomeDirectionsSlider";
import HomeBlog from '@/components/home/HomeBlog.vue';
import Button from "~/components/Button";

definePageMeta({
  title: 'Главная',
  description: 'Обучение для программистов, аналитиков, менеджеров проектов: тренинги, курсы, бесплатные семинары и вебинары, конференции',
  layout: 'home-page',
})

let showModal = false;
const openModal = () => {
  showModal = true;
}
let data = {
  image_1: 'course-categories',
  image_2: 'subscribe',
  image_3: 'callback-mini',
  image_4: 'dark-2',
}

//todo возможны ошибки
const {data: sliderItems} = useAsyncData(() => $fetch('/api/home/slider'))
const {data: servicesItems} = useAsyncData(() => $fetch('/api/home/services'))
const {data: directionsItems} = useAsyncData(() => $fetch('/api/home/directions'))
const {data: coursesItems} = useAsyncData(() => $fetch('/api/home/courses'))
const {data: blogItems} = useAsyncData(() => $fetch('/api/home/blog'))
</script>
<template>
  <layout-page-content>
    <HomeSlider :items="sliderItems"/>
    <layout-section   >
      <template #title>Наши <b>сервисы и продукты</b></template>
      <template #subTitle>
        <layout-page-content >
          <div class="w-75 mx-auto">
            <p>Хотите, чтобы IT-проект был разработан в срок, а продукт успешно вышел на рынок? Это достигается во многом
              благодаря высоким профессиональным качествам IT-команды и правильно выстроенным бизнес-процессам.</p>
            <p>IBS Training Center поможет вам в короткие сроки оценить профессиональные навыки всей команды IT-разработки
              и прокачать их до требуемого уровня.
              В результате проектная команда - аналитики, архитекторы, разработчики, тестировщики, BigData/DevOps инженеры
              и др. - сможет выйти в прод в нужные для заказчика сроки и с требуемым уровнем качества ПО без раздувания
              бюджета.</p>
            <p>В отличие от других провайдеров обучения мы учим тому, что успешно делаем сами более 20 лет!</p>
          </div>
        </layout-page-content>
      </template>
      <home-services-slider :items="servicesItems"/>
    </layout-section>
    <layout-section  :image="data.image_1" light  >
      <template #title><b>Направления обучения</b></template>
      <home-directions-slider :items="directionsItems"/>
      <template #footer>
        <Button class="_b-white _w-full"><span>Перейти в полный каталог</span></Button>
      </template>
    </layout-section>
    <layout-section>
      <template #title><b>Новые</b> курсы</template>
      <home-courses-slider :items="coursesItems"/>
    </layout-section>
    <layout-section>
      <template #title>Новости - <b>Статьи</b> - Блог</template>
      <home-blog :items="blogItems"/>
    </layout-section>

    <template v-if="false">
      <layout-section :image="data.image_2">
        <template #title>
          <b>Ищете нестандартное решение?</b>
          <br> Наши эксперты помогут!
        </template>
        <v-dialog
            v-model="showModal"
            persistent
            max-width="600px">
          <template #activator="{ on, attr }">
            <Button
                v-on="on"
                v-bind="attr">
              <span>Напиши нам</span>
            </Button>
          </template>
        </v-dialog>
      </layout-section>
      <layout-section>
        <template #title>Как не пропустить самое интересное?</template>
        <template #subTitle>Подписывайтесь на наш ежемесячный дайджест!</template>
      </layout-section>
    </template>
  </layout-page-content>
</template>

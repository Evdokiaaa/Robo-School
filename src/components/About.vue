<template>
  <section class="about">
    <div class="container">
      <div class="about__container">
        <h4 class="about__title">
          <strong>Robo School</strong> - учреждение для формирования кадрового
          педагогического резерва в сфере робототехникии программирования
        </h4>
        <div class="about__information">
          <div
            class="about__information-block"
            v-for="block in aboutInfo"
            :key="block.id"
          >
            <h2 class="about__information-count" >
              {{ block.count }}
            </h2>
            <p class="about__information-subtitle">{{ block.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const aboutInfo = [
  {
    id: 1,
    count: 10,
    desc: "УМК по различным направлениям по робототехнике",
  },
  {
    id: 2,
    count: 20,
    desc: "Школ, в которых запущена робототехника",
  },
  {
    id: 3,
    count: 100,
    desc: "Педагогов прошедших курсы повышения квалификации",
  },
  {
    id: 4,
    count: 10000,
    desc: "Обученных детей на базе собственных центров",
  },
];
</script>

<style lang="scss" scoped>
.about {
  padding: 120px 0 60px 0;
  @media screen and (max-width: 1024px) {
    padding: 60px 0 30px 0;
  }
  &__title {
    font-size: 30px;
    max-width: 900px;
    font-weight: 400;
    @media screen and (max-width: 624px) {
      font-size: 20px;
    }
  }
  &__information {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 624px) {
      grid-template-columns: repeat(1, 1fr);
    }
    &-block {
      padding: 120px 0 60px 0;

      @media screen and (max-width: 1024px) {
        text-align: center;
        padding: 60px 0 30px 0;
      }
      @media screen and (max-width: 624px) {
        padding: 30px 0 30px 0;
      }
    }
    &-count {
      font-size: 70px;
      color: #d52027;
      // opacity: 0;
      // transform: scale(0);
      // transition: opacity 0.5s ease, transform 0.5s ease;

      /* Добавьте анимацию для входа элемента */
    }
    &-subtitle {
      color: rgba(20, 16, 36, 0.7);
      font-size: 18px;
    }
  }
}

</style>

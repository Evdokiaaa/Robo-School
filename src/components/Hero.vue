<template>
  <section class="hero">
    <div class="container">
      <div class="hero__container">
        <div class="hero__left">
          <div class="hero__info">
            <h1 class="hero__title">ROBO SCHOOL</h1>
            <p class="hero__subtitle">
              Курсы повышения квалификации по робототехнике для педагогов
              начальной школы
            </p>
            <button class="hero__btn" @click="scrollTo('#application')">
              Записаться на курс
            </button>
          </div>
        </div>
        <div class="hero__right">
          <div class="hero__right-img">
            <img src="../assets/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <PhoneModal />
  </section>
</template>
<script setup>
import { scrollToSection } from "../helpers/scrollConfig.js";

const scrollTo = (section) => {
  scrollToSection(section, 500);
};
</script>

<style lang="scss" scoped>
.hero {
  color: #fff;
  background-color: #141024;

  &__container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      //justify-content: center;
      align-items: center;
    }
  }

  &__info {
    width: 500px;
    padding: 266px 0 411px 0;
    @media screen and (max-width: 1024px) {
      padding: 133px 0 100px 0;
    }
    @media screen and (max-width: 624px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 270px;
      padding: 50px 10px;
    }
  }
  &__title {
    font-size: 70px;
    font-weight: 600;
    @media screen and (max-width: 624px) {
      font-size: 35px;
    }
  }
  &__subtitle {
    margin: 20px 0 50px 0;
    @media screen and (max-width: 624px) {
      font-size: 18px;
      text-align: center;
    }
  }
  &__btn {
    padding: 20px 54px;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #d52027;
    color: #fff;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 624px) {
      padding: 20px 45px;
    }
  }
  &__right {
    @media screen and (max-width: 1024px) {
      display: none; //Прячим картинку
    }
  }
  &__right-img {
    img {
      display: block;
      margin-top: 100px;
      @media screen and (max-width: 1024px) {
        margin-top: 0;
      }
    }
  }
}
</style>

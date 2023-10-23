<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title-container">
        <h2 class="header__title">ROBO.SCHOOL</h2>
      </div>
      <nav class="header__nav">
        <ul class="header__menu-items">
          <li
            class="header__menu-item"
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            @click="scrollTo(menuItem.link)"
          >
            {{ menuItem.label }}
          </li>
        </ul>
      </nav>
      <div class="header__phone-container">
        <h2 class="header__phone">+7 800 000 11 22</h2>
      </div>
      <div class="header__mobile">
        <div class="header__mobile-container">
          <div class="header__mobile-info">
            <div class="header__mobile-call" @click="showPhone">
              <img src="../assets/call.svg" alt="" />
            </div>
            <div class="header__mobile-menu" @click="openMenu = !openMenu">
              <img src="../assets/mobile-menu.svg" alt="" />
            </div>
            <div class="menu" v-if="openMenu">
              <ul class="menu__items">
                <div class="close" @click="openMenu = !openMenu"></div>
                <li
                  class="menu__item"
                  v-for="menuItem in menuItems"
                  :key="menuItem.id"
                  @click="scrollTo(menuItem.link)"
                >
                  {{ menuItem.label }}
                </li>
              </ul>
            </div>
            <Transition name="fade">
              <PhoneModal v-if="phoneIsClicked" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { scrollToSection } from "../helpers/scrollConfig.js";
import PhoneModal from "./UI/PhoneModal.vue";

const menuItems = [
  { id: 1, label: "О школе", link: "#about" },
  { id: 2, label: "Тренеры", link: "#trainers" },
  { id: 3, label: "Стоимость", link: "#pricing" },
];

const phoneIsClicked = ref(false);
const openMenu = ref(false);
const showPhone = () => {
  phoneIsClicked.value = !phoneIsClicked.value;
};

const scrollTo = (section) => {
  scrollToSection(section, 500);
};
</script>
<style lang="scss">
.header {
  color: #fff;
  padding: 30px 100px;
  background: #141024;

  @media screen and (max-width: 1292px) {
    padding: 30px 10px;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      align-items: flex-start;
    }
  }
  &__menu-items {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__menu-item {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__title {
    cursor: pointer;
    @media screen and (max-width: 624px) {
      margin-top: 8px;
      font-size: 22px;
    }
  }

  &__menu-item + &__menu-item {
    margin-left: 40px;
  }
  &__phone-container {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  //mobile
  &__mobile {
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
    &-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 10px;
      position: relative;
    }
    &-call {
      //TODO FIX
      width: 44px;
      height: 44px;
      border-radius: 10px;
      border: 1px solid #fff;

      background: rgba(255, 255, 255, 0.08);
      padding: 10px;
      cursor: pointer;
    }
    &-menu {
      cursor: pointer;
      img {
        border: 1px solid #fff;
        border-radius: 10px;
      }
    }
  }
}

.menu {
  position: absolute;
  z-index: 1;
  width: 300px;
  background-color: rgb(179, 174, 174);
  padding: 20px;
  height: 40vh;
  top: -30px;
  right: -10px;
  list-style: none;

  &__item {
    cursor: pointer;
    padding: 10px 0;
    font-size: 36px;
    text-align: center;
    &:hover {
      opacity: 0.5;
    }
  }
  &__items {
    margin-top: 30px;
  }
  @media screen and (max-width: 624px) {
    width: 100vw;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::after,
  &::before {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:after {
    transform: rotate(-45deg);
  }
  &::before {
    transform: rotate(45deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transform: translateY(0);
  transition: 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

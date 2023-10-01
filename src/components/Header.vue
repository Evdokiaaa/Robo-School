<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title-container">
        <h2 class="header__title">ROBO.SCHOOL</h2>
      </div>
      <nav class="header__nav">
        <ul class="header__menu-items">
          <li class="header__menu-item">О школе</li>
          <li class="header__menu-item">Тренеры</li>
          <li class="header__menu-item">Стоимость</li>
        </ul>
      </nav>
      <div class="header__phone-container">
        <h2 class="header__phone">+7 800 000 11 22</h2>
      </div>
      <div class="header__mobile">
        <div class="header__mobile-container">
          <div class="header__mobile-info">
            <div class="header__mobile-call">
              <img src="../assets/call.svg" alt="" />
            </div>
            <div class="header__mobile-menu">
              <img src="../assets/mobile-menu.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup></script>
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
</style>

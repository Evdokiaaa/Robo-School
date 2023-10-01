<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left">
        <h2 class="footer__title">ROBO.SCHOOL</h2>
        <p class="footer__subtitle">© ROBO.SCHOOL</p>
      </div>
      <div class="footer__right">
        <h2 class="footer__phone">+7 800 000 11 22</h2>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background: #141024;
  color: #fff;
  padding: 40px 100px;
  @media screen and (max-width: 1024px) {
    padding: 30px 10px;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 624px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__title {
    font-size: 30px;
    font-weight: 700;
    @media screen and (max-width: 624px) {
      font-size: 18px;
    }
  }
  &__subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 5px;
    @media screen and (max-width: 624px) {
      display: none;
    }
  }
  &__phone {
    @media screen and (max-width: 624px) {
      font-size: 16px;
      padding: 20px 0 0px;
    }
  }
}
</style>

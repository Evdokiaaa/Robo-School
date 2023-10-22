<template>
  <section class="application" id="application">
    <div class="container">
      <div class="application__container">
        <div class="application__left">
          <h3 class="application__left-title">
            Запишитесь на курс со скидкой 10%
          </h3>
          <p class="application__left-end">
            Акция действительна до 10 марта 2022 года
          </p>
        </div>
        <div class="application__right">
          <form class="form">
            <input class="form__input" type="text" placeholder="Имя" required />
            <input
              class="form__input"
              type="phone"
              placeholder="Телефон"
              required
            />
            <input
              class="form__input"
              type="email"
              placeholder="E-mail"
              required
            />
            <button class="form__btn">Оформить заявку</button>
          </form>
        </div>
        <!--TODO Тут будут блок со скидками-->
        <div class="sales">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.application {
  background: #d52027;
  color: #fff;
  background-image: url("../assets/sales2.png");
  background-repeat: no-repeat;
  @media screen and (max-width: 1024px) {
    background-image: none;
  }
  &__container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 87px 0;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 624px) {
      padding: 40px;
    }
  }
  &__left {
    width: 470px;
    margin: 40px 144px 0 0;
    @media screen and (max-width: 1024px) {
      margin: 0 0 40px 0;
      text-align: center;
      width: 100%;
    }
    &-title {
      font-size: 36px;
      font-weight: 600;
      @media screen and (max-width: 624px) {
        margin-bottom: 10px;
        font-size: 30px;
      }
    }
    &-end {
      @media screen and (max-width: 624px) {
        font-size: 16px;
      }
    }
  }
  &__right {
    //padding: 87px 0;
  }
}
.form {
  display: flex;
  flex-direction: column;
  max-width: 500px;

  &__input {
    padding: 20px 0 20px 20px;
    max-width: 500px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    &::placeholder {
      color: rgba(40, 41, 68, 0.7);
    }
    // @media screen and (max-width: 1024px) {
    //   width: 100%;
    // }
  }
  &__btn {
    border-radius: 5px;
    background: #141024;
    color: #fff;
    border: none;
    padding: 20px 180px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    @media screen and (max-width: 624px) {
      padding: 20px 100px;
    }
  }
}
</style>

<template>
  <section class="prices">
    <div class="container">
      <div class="prices__title-container">
        <h2>Выберите нужный пакет</h2>
      </div>
      <div class="prices__container">
        <div class="price" v-for="price in prices" :key="price.id">
          <h3 class="price__title">{{ price.title }}</h3>
          <!--TODO-->
          <h3 class="price__price">{{ price.price }} ₽</h3>
          <p class="price__desc">{{ price.desc }}</p>
          <button class="price__btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const prices = [
  {
    id: 1,
    title: "– PRO –",
    price: 20000,
    desc: "УМК по робототетхнике и программированию",
  },
  {
    id: 1,
    title: "– ROBO –",
    price: 15000,
    desc: "УМК по робототетхнике",
  },
  {
    id: 1,
    title: "– PROG –",
    price: 10000,
    desc: "УМК по робототетхнике",
  },
];
</script>
<style lang="scss" scoped>
.prices {
  &__title-container {
    padding: 140px 0 60px;
    h2 {
      font-size: 50px;
      font-weight: 600;
      @media screen and (max-width: 1024px) {
        text-align: center;
      }
      @media screen and (max-width: 624px) {
        font-size: 30px;
      }
    }
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 40px;
    padding-bottom: 120px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.price {
  border-radius: 20px;
  border: 1px solid rgba(20, 16, 36, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:nth-child(1) {
    background: #141024;
    color: #fff;
  }
  &__title {
    font-size: 30px;
    padding: 40px 0 60px;
    font-weight: 600;
  }
  &__price {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &__desc {
    text-align: center;
    font-size: 18px;
    margin-bottom: 60px;
  }
  &__btn {
    padding: 25px 50px;
    margin-bottom: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    background: #d52027;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>

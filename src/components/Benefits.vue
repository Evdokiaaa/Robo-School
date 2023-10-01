<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__title-container">
        <h2>Что вы получите после курса</h2>
      </div>
      <div class="benefits__container">
        <div
          classs="benefits__block"
          v-for="benefit in benefits"
          :key="benefit.id"
        >
          <h4 class="benefits__title">{{ benefit.title }}</h4>
          <p class="benefits__subtitle">{{ benefit.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const benefits = [
  {
    id: 1,
    title: "Удостоверение",
    desc: "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
  },
  {
    id: 2,
    title: "Знания",
    desc: "По основам разработки учебно-методических комплексовпо робототехнике и программированию",
  },
  {
    id: 3,
    title: "Практику",
    desc: "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)",
  },
];
</script>
<style lang="scss" scoped>
.benefits {
  background: #f9f9f9;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  &__title-container {
    padding: 100px 0 60px;
    h2 {
      font-size: 50px;
      font-weight: 600;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    @media screen and (max-width: 624px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }
  }
  &__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  &__subtitle {
    color: rgba(20, 16, 36, 0.7);
    font-size: 18px;
    padding-bottom: 100px;
  }
}
</style>

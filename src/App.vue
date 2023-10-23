<template>
  <Header />
  <main class="main">
    <Hero />
    <About />
    <Benefits />
    <Trainers />
    <Prices />
    <Application />
  </main>
  <Footer />
</template>
<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Benefits from "./components/Benefits.vue";
import Trainers from "./components/Trainers.vue";
import Prices from "./components/Prices.vue";
import Application from "./components/Application.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import "./assets/style/style.scss";
</style>

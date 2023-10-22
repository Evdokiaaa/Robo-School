import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(VueScrollTo, {
  duration: 800,
  offset: -100,
});

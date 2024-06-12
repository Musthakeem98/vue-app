import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

createApp(App).mount("#app");

App.use(VueToast, {
  // Optional options
  position: "top-right",
});

App.mount("#app");

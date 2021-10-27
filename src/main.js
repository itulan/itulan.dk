import Vue from "vue";
import AOS from "aos";
import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import i18n from "./plugins/i18n";
import VueGtag from "vue-gtag";
import "./assets/css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/general-style.css";
import "./assets/css/hamburgers.css";
import "aos/dist/aos.css";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast)

if(process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: "G-D7QS8SHHMC" }
  })
}

Vue.config.productionTip = false;

AOS.init({
  once: true
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// component(s)

import { routes } from "./routes";
Vue.use(VueRouter);

import store from "./store/store";

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

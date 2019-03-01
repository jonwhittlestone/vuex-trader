import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { routes } from "./routes";
Vue.use(VueRouter);

import store from "./store/store";

Vue.filter("currency", value => {
  return "£" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

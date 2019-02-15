import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// component(s)
import Header from './components/Header.vue'
Vue.component('app-header', Header);


import { routes } from './routes';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

<template>
  <div class="container-fluid">
    <app-header></app-header>

    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
/*
    1. count components we need and create a template for each
      - Home
      - Header
      - stocks/Stocks.vue
      - stocks/Stock.vue
      - portfolio/Stock.vue
      - portfolio/Portfolio.vue

    2. Count and Set up routes
      1. /#           // starting page
      2. /stocks      // choose a stock
      3. /portfolio   // after adding, we can see in portfolio

    3. Set up basic header component with nav containing links

    4. Set up stocks grid/child components, buy button which lets you submit only when field is populated/valid number/number > 0

    5. (video 281) Set up state management, which mutations/actions i have and how to dispatch them
    */
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
</style>
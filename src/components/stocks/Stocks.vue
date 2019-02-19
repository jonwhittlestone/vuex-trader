<template>
  <div class="container">
    <app-stock v-for="stock in availableStocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock
  },
  data() {
    return {
      availableStocks: [
        {
          id: 0,
          name: "bmw",
          price: 110
        },
        {
          id: 1,
          name: "jaguar",
          price: 59
        },
        {
          id: 2,
          name: "kimberley clark",
          price: 132
        },
        {
          id: 3,
          name: "nintendo",
          price: 94
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
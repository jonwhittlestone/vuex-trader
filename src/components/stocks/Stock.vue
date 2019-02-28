<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        {{stock.name}}
        <span class="stock-price-container">
          [Price:
          <span class="stock-price">{{stock.price}}</span>]
        </span>
      </div>
      <div class="panel-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            placeholder="Enter Quantity .."
            :class="{danger: insufficientFunds}"
          >
          <span class="input-group-btn">
            <button
              class="btn btn-success"
              :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
              type="button"
              @click="submitBuyStock"
            >{{insufficientFunds ? "Insufficient Funds" : "Buy" }}</button>
          </span>
        </div>
        <!-- /input-group -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px red solid;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    stock: { type: Object }
  },
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    ...mapGetters(["funds"]),
    insufficientFunds() {
      return parseInt(this.quantity) * this.stock.price > this.funds;
    }
  },
  methods: {
    submitBuyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch("processOrder", order);
      this.quantity = null;
    }
  }
};
</script>

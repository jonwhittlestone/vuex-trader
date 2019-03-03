<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        {{stock.name}}
        <span class="stock-price-container">
          [Price:
          <span class="stock-price">{{stock.price}} | Quantity: {{stock.quantity}}</span>]
        </span>
      </div>
      <div class="panel-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            placeholder="Enter Quantity .."
            :class="{danger:insufficientQuantity}"
          >
          <span class="input-group-btn">
            <button
              class="btn btn-success"
              :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)"
              type="button"
              @click="submitSellStock"
            >{{insufficientQuantity ? 'Not Enough' : 'Sell' }}</button>
          </span>
        </div>
        <!-- /input-group -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>


<script>
import { mapActions, mapGetters } from "vuex";
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    ...mapGetters(["funds", "stockPortfolio"]),
    submitSellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
</style>


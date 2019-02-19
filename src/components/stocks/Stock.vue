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
            type="text"
            class="form-control"
            v-model="quantity"
            placeholder="Enter Quantity .."
          >
          <span class="input-group-btn">
            <button
              class="btn btn-success"
              :disabled="quantity <= 0 || Number.isInteger(quantity)"
              type="button"
              @click="submitBuyStock"
            >Submit</button>
          </span>
        </div>
        <!-- /input-group -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    submitBuyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.clear();
      console.log(order);
      this.quantity = null;
    }
  }
};
</script>

<style scoped>
</style>
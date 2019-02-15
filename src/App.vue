<template>
    <div class="container">

      <nav class="navbar navbar-default">
          <div class="container-fluid">
              <div class="navbar-header">
                  Stock Trader
              </div>

              <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <router-link to='/portfolio' tag='li'>
                    <a> 
                      Portfolio
                    </a>  
                     </router-link> 

                    <router-link to='/stocks' tag='li'>
                    <a> 
                      Stocks
                    </a>  
                     </router-link> 
                  </ul>
              </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
      </nav>

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
    */
    export default {

    }
</script>

<style>

</style>
import stocks from "../../data/stocks";
const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  processOrder: ({ commit }, order) => {
    console.log("the process order action");
    console.log(order);
    // commit();
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

// Because we want to see our data
const getters = {
  stocks: state => {
    return state.stocks;
  }
};

// export it all in a javscript object
export default { state, mutations, actions, getters };

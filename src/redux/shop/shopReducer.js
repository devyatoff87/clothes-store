import shopItemsOnline from "../../data/shop-data.json";
import { shopItemsLocal } from "../../data/shop-data.js"

const shopItems = window.navigator.onLine ? shopItemsOnline : shopItemsLocal

const init = {
  collections: shopItems,
};

const shopReducer = (state = init, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

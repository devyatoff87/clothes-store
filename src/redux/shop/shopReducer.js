import shopItemsOnline from "../../data/shop-data.json";
import { shopItemsLocal } from "../../data/shop-data.js"

const shopItems = (() => {
  if (window.navigator.onLine) {
    return shopItemsOnline
  }
  return shopItemsLocal
})()

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

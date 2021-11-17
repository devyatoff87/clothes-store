import { shopItems } from "data/shop-data.js";

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

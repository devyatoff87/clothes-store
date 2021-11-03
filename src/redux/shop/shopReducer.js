import shopItems from "../../data/shop-data.json";

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

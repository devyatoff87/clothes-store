import shopItemsOnline from "../../data/shop-data.json";
import { shopItemsLocal } from "../../data/shop-data.js"
import SHOP_DATA from "assets/shop.data";
import { SHOP_ACTIONS } from "./shopActionTypes";

const shopItems = window.navigator.onLine ? shopItemsOnline : shopItemsLocal

const init = {
  collections: null,
};

const shopReducer = (state = init, action) => {
  switch (action.type) {
    case SHOP_ACTIONS.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;

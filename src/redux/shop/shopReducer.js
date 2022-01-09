import shopItemsOnline from "../../data/shop-data.json";
import { shopItemsLocal } from "../../data/shop-data.js"
import SHOP_DATA from "assets/shop.data";
import { SHOP_ACTIONS } from "./shopActionTypes";

const shopItems = window.navigator.onLine ? shopItemsOnline : shopItemsLocal

const init = {
  collections: null,
  isFetching: false,
  errorMsg: undefined
};

const shopReducer = (state = init, action) => {
  switch (action.type) {

    case SHOP_ACTIONS.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }

    case SHOP_ACTIONS.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }

    case SHOP_ACTIONS.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload
      }

    default:
      return state;
  }
};

export default shopReducer;

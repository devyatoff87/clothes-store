import { CART_ACTIONS } from "./cartActionTypes";

export const toggleCartHidden = () => {
  return { type: CART_ACTIONS.TOGGLE_CART_HIDDEN };
};

export const addNewItemToCart = (item) => {
  return { type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: item };
};

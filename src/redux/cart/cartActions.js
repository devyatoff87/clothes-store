import { CART_ACTIONS } from "./cartActionTypes";

export const toggleCartHidden = () => {
  return { type: CART_ACTIONS.TOGGLE_CART_HIDDEN };
};

export const addNewItemToCart = (item) => {
  return { type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: item };
};

export const clearItemFromCart = (item) => {
  return { type: CART_ACTIONS.CLEAR_ITEM_FROM_CART, payload: item };
};

export const removeItem = (item) => {
  return { type: CART_ACTIONS.REMOVE_ITEM, payload: item };
};

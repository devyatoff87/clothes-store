import { CART_ACTIONS } from "./cartActionTypes";

export const toggleCartHidden = () => {
  return { type: CART_ACTIONS.TOGGLE_CART_HIDDEN };
};

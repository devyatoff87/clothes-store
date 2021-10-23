import { CART_ACTIONS } from "./cartActionTypes";

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;

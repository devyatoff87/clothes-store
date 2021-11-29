import { LAYOUT_ACTIONS } from "./layoutActionTypes";


const layoutReducer = (state = { clickOutside: false }, action) => {
  switch (action.type) {
    case LAYOUT_ACTIONS.CLOSE_CLICK_OUSIDE:
      return { ...state, clickOutside: false };
    case LAYOUT_ACTIONS.TOGGLE_CLICK_OUSIDE:
      return { ...state, clickOutside: !state.clickOutside };
    default:
      return state;
  }
};

export default layoutReducer;

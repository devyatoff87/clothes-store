import { LAYOUT_ACTIONS } from "./layoutActionTypes";

const init = {
  overflowHidden: false,
  clickOutside: false
};

const layoutReducer = (state = init, action) => {
  switch (action.type) {
    case LAYOUT_ACTIONS.TOGGLE_OVERFLOW_HIDDEN:
      return { ...state, overflowHidden: () => !state.overflowHidden };
    case LAYOUT_ACTIONS.TOGGLE_CLICK_OUSIDE:
      return { ...state, clickOutside: !state.clickOutside };
    default:
      return state;
  }
};

export default layoutReducer;

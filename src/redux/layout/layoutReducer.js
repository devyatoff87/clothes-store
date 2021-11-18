import { LAYOUT_ACTIONS } from "./layoutActionTypes";

const init = {
  overflowHidden: false,
};

const layoutReducer = (state = init, action) => {
  switch (action.type) {
    case LAYOUT_ACTIONS.TOGGLE_OVERFLOW_HIDDEN:
      return { ...state, overflowHidden: () => !state.overflowHidden };
    default:
      return state;
  }
};

export default layoutReducer;

import { LAYOUT_ACTIONS } from "./layoutActionTypes";

export const toggleOverflowHidden = () => {
  return { type: LAYOUT_ACTIONS.TOGGLE_OVERFLOW_HIDDEN };
};

export const toggleCloseByOutsideClick = () => {
  return { type: LAYOUT_ACTIONS.TOGGLE_CLICK_OUSIDE };
};

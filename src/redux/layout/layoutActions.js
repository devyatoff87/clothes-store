import { LAYOUT_ACTIONS } from "./layoutActionTypes";

export const closeModalOverflow = () => {
  return { type: LAYOUT_ACTIONS.CLOSE_CLICK_OUSIDE };
};

export const toggleModalOverflow = () => {
  return { type: LAYOUT_ACTIONS.TOGGLE_CLICK_OUSIDE };
};

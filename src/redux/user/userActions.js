import { ACTIONS } from "redux/actions";

export const setCurrentUser = (user) => ({
  type: ACTIONS.SET_CURRENT_USER,
  payload: user,
});

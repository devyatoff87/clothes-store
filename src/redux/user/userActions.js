import { USER_ACTIONS } from "./userActionTypes";

export const setCurrentUser = (user) => ({
  type: USER_ACTIONS.SET_CURRENT_USER,
  payload: user,
});

export const signOutCurrentUser = () => ({
  type: USER_ACTIONS.SIGNOUT_SUCCESS,
});

export const signOutError = (err) => ({
  type: USER_ACTIONS.SIGNOUT_ERROR,
  payload: err
})
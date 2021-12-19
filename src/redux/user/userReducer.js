import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { USER_ACTIONS } from "./userActionTypes";

const INIT_USER = {
  currentUser: null
  // currentUser: {
  //   displayName: "Vladilen",
  //   email: "v.devyatov@gmail.com",
  //   password: "nopassword"
  // },
};

const printErr = (err) => {
  console.log(err);
  return err
}

const userReducer = (state = INIT_USER, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTIONS.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }
    case USER_ACTIONS.SIGNOUT_ERROR:
      return {
        ...state,
        currentUser: null,
        err: printErr(action.payload)
      }
    default:
      return state;
  }
};

export default userReducer;

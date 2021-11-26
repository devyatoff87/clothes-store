import { USER_ACTIONS } from "./userActionTypes";

const INIT_USER = {
  currentUser: null
  // currentUser: {
  //   displayName: "Vladilen",
  //   email: "v.devyatov@gmail.com",
  //   password: "nopassword"
  // },
};

const userReducer = (state = INIT_USER, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

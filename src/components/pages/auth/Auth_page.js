import React from "react";
import SignIn from "components/organisms/sign-in/SignIn_comp";
import SignUp from "components/organisms/sign-up/SignUp_comp";
const Auth = () => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col col-6"}>
          <SignIn />
        </div>
        <div className={"col col-6"}>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Auth;

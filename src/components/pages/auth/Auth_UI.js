import React, { useEffect, useState } from "react";
import SignIn from "components/compound/auth/sign-in/SignIn_comp";
import SignUp from "components/compound/auth/sign-up/SignUp_comp";
import "./Auth_page_style.scss";
import { Navigate, useNavigate } from "react-router";

const Auth = ({ currentUser }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUser(true)
    }
    user && navigate("/", { replace: true })
  });
  document.title = "Authorisation";

  return (
    <div className="container page-content">
      <div className="row">
        <div className="col-12 col-md-6">
          <SignIn />
        </div>
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <SignUp />
        </div>
      </div>
    </div>

  )
};

export default Auth;

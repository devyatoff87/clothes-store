import React from "react";
import "./Header_style.scss";
import { ReactComponent as Logo } from "../../../data/crown.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "redux/user/userActions";

const HeaderComp = ({ currentUser }) => {
  return (
    <div className={"header"}>
      <div className={"container-wide"}>
        <div className={"header-inner"}>
          <div className={"logo-container"}>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className={"options"}>
            <Link to={"shop"} className={"option"}>
              Shop
            </Link>
            {currentUser ? (
              <div className={"option"}>Sign out</div>
            ) : (
              <Link to={"/auth"} className={"option"}>
                Sign in
              </Link>
            )}
            <Link to={"contact"} className={"option"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;

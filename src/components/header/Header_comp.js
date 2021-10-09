import React from "react";
import "./Header_style.scss";
import { ReactComponent as Logo } from "../../data/crown.svg";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <div className={"header"}>
      <div className={"container-wide"}>
        <div className={"header-inner"}>
          <div className={"logo-container"}>
            {" "}
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className={"options"}>
            <Link to={"shop"} className={"option"}>
              To shop
            </Link>
            <Link to={"contact"} className={"option"}>
              To contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;

import React, { useContext, useEffect, useState } from "react";
import "./Header_style.scss";
import { ReactComponent as Logo } from "../../../data/crown.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../../firebase/firebaseUtils";
import { signOut } from "firebase/auth";
import CartIcon from "components/compound/cart/cart-icon/CartIcon_comp";
import CartDropdown from "components/compound/cart/cart-dropdown/CartDropdown_comp";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/userSelectors";
import HeaderContext from "components/compound/header/header_context";
import ClickOutsideToClose from "components/layouts/ClickOutsideToClose";

const HeaderComp = ({ currentUser }) => {
  const [show, setShow] = useState(() => false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    let body = document.querySelector("body");
    if (show) {
      if (document.body.clientHeight > window.innerHeight) {
        body.classList.add("overflow-hidden");
      }
    } else if (!show) {
      body.classList.remove("overflow-hidden");
    }
  });

  const headerContextValues = { toggleShow, show: show };

  return (
    <HeaderContext.Provider value={headerContextValues}>
      <div className={"header"}>
        <div className={"container"}>
          <div className={"header-inner"}>
            <div className={"logo-container"}>
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className={"options"}>
              <Link to={`/shop`} className={"option"}>
                Shop
              </Link>
              {currentUser ? (
                <div className={"option"} onClick={() => signOut(auth)}>
                  Sign out
                </div>
              ) : (
                <Link to={"/auth"} className={"option"}>
                  Sign in
                </Link>
              )}
              <Link to={"/contact"} className={"option"}>
                Contact
              </Link>
              <CartIcon />
            </div>
            {show ? <CartDropdown /> : null}
          </div>
        </div>
        {show && <ClickOutsideToClose bgColor="#00000061" />}
      </div>
    </HeaderContext.Provider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(HeaderComp);

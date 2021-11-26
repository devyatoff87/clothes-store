import React, { useEffect, useState } from "react";
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
import ClickOutsideToClose from "components/layouts/ClickOutsideToClose";
import { selectClickByOutside } from "redux/layout/layoutSelector";
import { toggleCloseByOutsideClick } from "redux/layout/layoutActions";
import { toggleCartHidden } from "redux/cart/cartActions";
import { selectCartHidden } from "redux/cart/cartSelectors";

const HeaderComp = ({ currentUser, clickOutside, hideCart, hidden }) => {
  const [show, setShow] = useState(() => false);


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

  return (
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
            <CartIcon />
          </div>
          {hidden ? <CartDropdown /> : null}
        </div>
      </div>
      {clickOutside && <ClickOutsideToClose bgColor="#00000061" />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  clickOutside: selectClickByOutside,
  hidden: selectCartHidden
});


const mapDispatchToProps = (dispatch) => {
  return {
    clickOutsideToggle: () => dispatch(toggleCloseByOutsideClick()),
    hideCart: () => dispatch(toggleCartHidden())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);

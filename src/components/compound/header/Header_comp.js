import React, { useEffect, useState } from "react";
import "./Header_style.scss";
import { ReactComponent as Logo } from "../../../data/crown.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../../firebase/fireAuth";
import { signOut } from "firebase/auth";
import CartIcon from "components/compound/cart/cart-icon/CartIcon_comp";
import CartDropdown from "components/compound/cart/cart-dropdown/CartDropdown_comp";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/userSelectors";
import { selectCartHidden } from "redux/cart/cartSelectors";
import ClickOutsideToClose from "components/layouts/ClickOutsideToClose";
import { signOutCurrentUser, signOutError } from "redux/user/userActions";

const HeaderComp = ({ currentUser, hidden, signOutSuccess, signOutError }) => {

  const [log, setLog] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setLog(true)
    }
  })

  const signOutHanlde = async () => {
    try {
      await signOut(auth);
      signOutSuccess()
    } catch (err) {
      signOutError(err)
    }
  };

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
            {
              currentUser && log ? (
                <div className={"option"} onClick={signOutHanlde}>
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
      {hidden && <ClickOutsideToClose bgColor="#00000061" />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => {
  return {
    // hideModal: () => dispatch(toggleCartHidden),
    signOutSuccess: () => dispatch(signOutCurrentUser()),
    signOutErr: (err) => dispatch(signOutError(err))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);

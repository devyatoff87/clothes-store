import React from "react";
import "./CartIcon_style.scss";
import { ReactComponent as ShoppingIcon } from "assets/icons/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleCartHidden} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(null, mapDispatchToProps)(CartIcon);

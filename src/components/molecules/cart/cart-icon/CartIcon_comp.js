import React from "react";
import "./CartIcon_style.scss";
import { ReactComponent as ShoppingIcon } from "assets/icons/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "redux/cart/cartActions";
import { selectCartItemsCount } from "redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleCartHidden} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

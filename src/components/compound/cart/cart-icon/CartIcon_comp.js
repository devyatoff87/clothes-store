import React from "react";
import "./CartIcon_style.scss";
import { ReactComponent as ShoppingIcon } from "assets/icons/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCloseByOutsideClick } from "redux/layout/layoutActions";
import { toggleCartHidden } from "redux/cart/cartActions";

const CartIcon = ({ itemCount, clickOutsideToggle, hideCart }) => {

  return (
    <div
      onClick={() => {
        clickOutsideToggle()
        hideCart()
      }}
      className="cart-icon"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(toggleCartHidden()),
    clickOutsideToggle: () => dispatch(toggleCloseByOutsideClick())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

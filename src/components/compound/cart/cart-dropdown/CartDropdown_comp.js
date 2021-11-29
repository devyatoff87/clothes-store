import React from "react";
import "./CartDropdown_style.scss";
import Button from "components/simple/button/Button_comp";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem_comp";
import { selectCartItems } from "redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { selectCartHidden } from "redux/cart/cartSelectors";
import { closeModalOverflow } from "redux/layout/layoutActions";
import { toggleCartHidden } from "redux/cart/cartActions";

const CartDropdown = ({ cartItems, history, hideCart, clickOutsideToggle }) => {
  const url = cartItems.length > 0 ? "/checkout" : "/shop";
  const btnText = cartItems.length > 0 ? "To checkout" : "Go shopping!";

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="absolute-centered msg-1">Cart is still empty?!</span>
        )}
      </div>
      <Button
        onClickProps={() => {
          history.push(url);
          hideCart()
          clickOutsideToggle()
        }}
      >
        {btnText}
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hiddenCart: selectCartHidden
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(toggleCartHidden()),
    clickOutsideToggle: () => dispatch(closeModalOverflow()),
  };
};

//if second argument of connect misses - mapStateToProps will pass dispatch into component props automatically
//no mapDispatchToProps needed in this case
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));

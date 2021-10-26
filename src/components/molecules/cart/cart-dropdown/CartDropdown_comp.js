import React from "react";
import "./CartDropdown_style.scss";
import Button from "components/atoms/button/Button_comp";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem_comp";
import { selectCartItems } from "redux/cart/cartSelectors";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps, null)(CartDropdown);

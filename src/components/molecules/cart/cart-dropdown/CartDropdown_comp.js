import React from "react";
import "./CartDropdown_style.scss";
import Button from "components/atoms/button/Button_comp";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;

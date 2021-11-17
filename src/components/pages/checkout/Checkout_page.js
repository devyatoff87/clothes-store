import React from "react";
import "./Checkout_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import IndexCheckout from "components/compound/checkout/index";
const Checkout = () => {
  document.title = "Checkout";
  return (
    <div className="container">
      <div className="checkout-page">
        <IndexCheckout />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);

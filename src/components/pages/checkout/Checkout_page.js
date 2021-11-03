import React from "react";
import "./Checkout_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import CheckoutHeader from "components/compound/checkout/checkout-header/CheckoutHeader_comp";
import CheckoutList from "components/compound/checkout/checkout-list/CheckoutList_comp";
const Checkout = ({ cartItems, total, dispatch }) => {
  return (
    <div className="container">
      <div className="checkout-page">
        <CheckoutHeader />
        <CheckoutList />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);

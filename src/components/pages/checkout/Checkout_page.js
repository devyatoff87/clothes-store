import React from "react";
import "./Checkout_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import CheckoutItem from "components/molecules/checktout-item/CheckoutItem_comp";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="container-narrow">
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        <div className="total">Total: ${total}.00</div>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <a className="msg-1 back2shop-link" href="/shop">
            Back to the shop
          </a>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);

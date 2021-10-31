import React from "react";
import "./Checkout_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import CheckoutItem from "components/compound/checkout/checktout-item/CheckoutItem_comp";
import { removeAll } from "redux/cart/cartActions";
const Checkout = ({ cartItems, total, dispatch }) => {
  return (
    <div className="container">
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
        <div
          style={{ width: 100 + "%" }}
          class="d-flex align-items-center justify-content-between"
        >
          <div class="clear-all">
            <a
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeAll());
              }}
              href={window.location.href}
            >
              Clear all
            </a>
          </div>
          <div class="total">Total: ${total}0.00</div>
        </div>
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

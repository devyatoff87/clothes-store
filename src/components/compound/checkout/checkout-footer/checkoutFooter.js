import React from "react";
import StripeCheckoutProps from "react-stripe-checkout";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { removeAll } from "redux/cart/cartActions";

const Checkoutfooter = ({ total = 0, cartItems, dispatch }) => {
  const priceForStripe = total * 100;
  const publishableKey =
    "pk_test_51JwrxBKYTPR8DBjNZcXb8JKNYyduPF0FqlMokd6474fVVpB1GcljsjMzpHdvXDsUslLZ9dAO33q3iUh2JyLhsWSR000U9iy8Ph";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div className="d-flex justify-content-between mt-4 w-100">
      <div className="mt-3">
        {cartItems.length > 0 ? (
          <a
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeAll());
            }}
            href={window.location.href}
          >
            Clear all
          </a>
        ) : null}
      </div>
      <StripeCheckoutProps
        label={"Pay now"}
        name={"Clothe store"}
        description={"Your total price  is: "}
        stripeKey={publishableKey}
        token={onToken}
        price={priceForStripe}
      ></StripeCheckoutProps>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(Checkoutfooter);

import React from "react";
import "./CheckoutList_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cartSelectors";
import CheckoutItem from "../checktout-item/checkout-item/CheckoutItem_comp";

import "../Table_styles.scss";
const CheckoutList = ({ cartItems }) => {
  return (
    <>
      <div className="mt-5">
        <table>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <tr>
                <td>
                  <a className="msg-1 back2shop-link" href="/shop">
                    Back to the shop
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CheckoutList);

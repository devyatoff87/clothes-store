import React from "react";
import "./CheckoutHeader_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import "../Table_styles.scss";
const CheckoutHeader = ({ total }) => {
  return (
    <>
      <div className="checkout-header">
        <table>
          <tbody>
            <tr>
              <td>Product</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Remove</td>
            </tr>
          </tbody>
        </table>
        <div className="w-100 mt-3 d-flex justify-content-end">
          <div class="total">Total: ${total}0.00</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutHeader);

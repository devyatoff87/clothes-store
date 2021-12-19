import React, { useEffect } from "react";
import "./CheckoutHeader_style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart/cartSelectors";
import "../Table_styles.scss";

const CheckoutHeader = ({ total }) => {
  useEffect(() => {

    let elem = document.querySelector(".total");

    let options = {
      root: null,
      threshold: 1,
      rootMargin: "0px"
    }

    let myOberver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio < 0.999) {
          entry.target.style.cssText = "position: fixed; top: 0";
        }
      })
    }, options)

    myOberver.observe(elem)



  }, [])


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
          <div className="total">Total: ${total}.00</div>
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

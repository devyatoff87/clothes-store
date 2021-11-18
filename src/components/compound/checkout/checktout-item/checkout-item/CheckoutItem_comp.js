import React from "react";
import "./CheckoutItem_style.scss";
import {
  clearItemFromCart,
  addNewItemToCart,
  removeItem,
} from "redux/cart/cartActions";
import { connect } from "react-redux";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <tr className="checkout-item">
      <td className="image-container">
        <img className="img_" src={imageUrl} alt="" />
      </td>
      <td className="name">{name}</td>
      <td>
        <div className="quantity">
          <div onClick={() => removeItem(item)} className="arrow">
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div onClick={() => addItem(item)} className="arrow">
            &#10095;
          </div>
        </div>
      </td>
      <td className="price">${price}.00</td>
      <td>
        <div onClick={() => clearItem(item)} className="remove-button">
          <span>&#10006;</span>
        </div>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addNewItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

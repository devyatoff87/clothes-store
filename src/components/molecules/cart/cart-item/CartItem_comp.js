import React from "react";
import "./CartItem_style.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

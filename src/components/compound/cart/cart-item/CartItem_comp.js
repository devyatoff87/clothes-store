import React, { useEffect } from "react";
import imgPlaceholder from "utiles/imgPlaceholder";
import "./CartItem_style.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img className={"img_"} src={imageUrl} alt="item" />
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

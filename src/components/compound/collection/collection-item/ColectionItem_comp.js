import Button from "components/simple/button/Button_comp";
import React from "react";
import "./ColectionItem_style.scss";
import { addNewItemToCart } from "redux/cart/cartActions";
import { connect } from "react-redux";

const ColectionItem = ({ item, addNewItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className={"collection-item"}>
      <div
        className={"image"}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={"collection-footer"}>
        <div className={"name"}>{name}</div>
        <div className={"price"}>{price},00€</div>
      </div>
      <Button onClickProps={() => addNewItem(item)} inverted>
        Add to card
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (item) => {
      dispatch(addNewItemToCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(ColectionItem);

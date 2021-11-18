import React from "react";
import "./CartIcon_style.scss";
import { ReactComponent as ShoppingIcon } from "assets/icons/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { useContext } from "react";
import HeaderContext from "components/compound/header/header_context";

const CartIcon = ({ itemCount }) => {
  const context = useContext(HeaderContext);

  return (
    <div
      onClick={() => {
        context.toggleShow();
      }}
      className="cart-icon"
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, null)(CartIcon);

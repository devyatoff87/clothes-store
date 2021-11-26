import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectClickByOutside } from "redux/layout/layoutSelector";
import { toggleCloseByOutsideClick } from "redux/layout/layoutActions";
import { toggleCartHidden } from "redux/cart/cartActions";

const ClickOutsideToClose = ({ bgColor, clickOutsideToggle, hideCart }) => {

  const styles = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    left: 0,
    top: 0,
    zIndex: 1,
    overflow: "hidden",
  };

  styles.background = bgColor ? bgColor : "#00000061";

  return (
    <div
      onClick={() => {
        // context.toggleShow();
        clickOutsideToggle()
        hideCart()
      }}
      style={styles}
    ></div>
  );
};

const mapStateToProps = createStructuredSelector({
  clickOutside: selectClickByOutside
})

const mapDispatchToProps = (dispatch) => {
  return {
    clickOutsideToggle: () => dispatch(toggleCloseByOutsideClick()),
    hideCart: () => dispatch(toggleCartHidden())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClickOutsideToClose);

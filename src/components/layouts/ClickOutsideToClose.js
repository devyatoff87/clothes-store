import header_context from "components/compound/header/header_context";
import React, { useContext, useEffect, useState } from "react";

const ClickOutsideToClose = ({ bgColor }) => {
  const context = useContext(header_context);

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
        context.toggleShow();
      }}
      style={styles}
    ></div>
  );
};

export default ClickOutsideToClose;

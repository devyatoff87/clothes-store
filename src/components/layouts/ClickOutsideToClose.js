import React from "react";

const ClickOutsideToClose = ({ bgColor, element }) => {
  const styles = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    left: 0,
    top: 0,
    zIndex: 0,
  };

  styles.background = bgColor ? bgColor : null;

  return <div onClick={() => console.log("hello")} style={styles}></div>;
};

export default ClickOutsideToClose;

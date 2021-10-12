import React from "react";
import "./Button_style.scss";
const Button = ({ children, onClickProps }) => {
  return (
    <button onClick={onClickProps} className={"custom-button"}>
      {children}
    </button>
  );
};

export default Button;

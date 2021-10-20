import React from "react";
import "./Button_style.scss";
const Button = ({ children, onClickProps, additionalStyle }) => {
  return (
    <button
      onClick={onClickProps}
      className={`custom-button ${additionalStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;

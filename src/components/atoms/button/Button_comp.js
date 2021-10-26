import React from "react";
import "./Button_style.scss";
const Button = ({ children, onClickProps, inverted }) => {
  return (
    <button
      onClick={onClickProps}
      className={`custom-button ${inverted && "inverted"}`}
    >
      {children}
    </button>
  );
};

export default Button;

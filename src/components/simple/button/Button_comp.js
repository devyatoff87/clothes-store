import React from "react";
import "./Button_style.scss";
const Button = ({ children, onClickProps, inverted, additionalStyles }) => {
  const inverted_ = inverted ? inverted : "";
  const additionalStyles_ = additionalStyles ? additionalStyles : "";
  return (
    <button
      onClick={onClickProps}
      className={`custom-button ${(inverted_, additionalStyles_)}`}
    >
      {children}
    </button>
  );
};

export default Button;

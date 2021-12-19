import React from "react";
import "./Button_style.scss";


const Button = ({ children, onClickProps, inverted, additionalStyles }) => {

  const inverted_ = inverted ? "inverted" : "";
  const additionalStyles_ = additionalStyles ? additionalStyles : "";
  const buttonStyles = `custom-button ${inverted_} ${additionalStyles_}`
  return (
    <button
      onClick={onClickProps}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};



export default Button;

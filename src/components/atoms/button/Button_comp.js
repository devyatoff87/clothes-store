import React from "react";
import "./Button_style.scss";
const Button = ({ children, ...otherProps }) => {
  return <button className={"custom-button"}>{children}</button>;
};

export default Button;

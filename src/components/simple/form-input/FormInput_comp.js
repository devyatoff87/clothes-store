import React from "react";
import "./Form_style.scss";

const FormInput = ({ onChangeCallback, label, ...props }) => {
  return (
    <div className={"input-group"}>
      <input
        className={"form-input"}
        onChange={(e) => onChangeCallback(e)}
        {...props}
      />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

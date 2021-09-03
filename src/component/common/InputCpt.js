import React from "react";
import Lock from "../../images/lock.svg";
import Phone from "../../images/phone.svg";

function InputCpt(props) {
  const { variant, disabled, icon, size, error, helper, value } = props;
  return (
    <label
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "0.5em",
        color: error != undefined ? "#d32f2f" : "#333333",
      }}
    >
      Label
      {icon && (
        <img
          src={icon === "phone" ? Phone : Lock}
          className={icon}
          alt="cart-icon"
        />
      )}
      <input
        type={variant}
        className={size + " " + error}
        placeholder="Placeholder"
        disabled={disabled}
        value={value}
      />
      {<h5>{helper}</h5>}
    </label>
  );
}

export default InputCpt;

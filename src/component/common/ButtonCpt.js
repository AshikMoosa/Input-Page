import React from "react";
import Icon from "../../images/cart.svg";

function ButtonCpt(props) {
  const { variant, color, disabled, icon, size } = props;
  return (
    <button disabled={disabled} className={color + " " + variant + " " + size}>
      {icon && icon === "left" && <img src={Icon} alt="cart-icon" />}
      {props.name}
      {icon && icon === "right" && <img src={Icon} alt="cart-icon" />}
    </button>
  );
}

export default ButtonCpt;

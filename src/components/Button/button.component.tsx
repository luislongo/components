import React from "react";
import StyledButton from "./button.style";
import ButtonProps from "./button.props";

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;

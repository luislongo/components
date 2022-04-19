import React, { FC } from "react";
import StyledButton from "./button.style";
import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

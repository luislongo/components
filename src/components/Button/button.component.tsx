import React, { FC } from "react";
import StyledButton from "./button.style";
import ButtonProps from "./button.props";

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const dispatchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.type != "disabled" && props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <StyledButton {...props} onClick={dispatchClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

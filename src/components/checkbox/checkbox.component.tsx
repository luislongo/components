import React, { FC, useState } from "react";
import StyledCheckbox from "./checkbox.style";
import CheckboxProps from "./checkbox.props";

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const [isChecked, setChecked] = useState<boolean>(props.checked || false);

  const checkedSVG = () => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
          fill="#64656A"
        />
      </svg>
    );
  };

  const uncheckedSVG = () => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          fill="#64656A"
        />
      </svg>
    );
  };

  const dispatchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      setChecked(!isChecked);
      props.onClick && props.onClick(e);
    }
  };

  return (
    <StyledCheckbox {...props} onClick={dispatchClick}>
      {isChecked ? checkedSVG() : uncheckedSVG()}
    </StyledCheckbox>
  );
};

export default Checkbox;

import React, { FC, useEffect, useState } from "react";
import StyledToggleButton from "./toggleButton.style";

interface ToggleButtonProps {
  checkedSVG: JSX.Element;
  uncheckedSVG: JSX.Element;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ToggleButton: FC<ToggleButtonProps> = (props: ToggleButtonProps) => {
  const [isChecked, setChecked] = useState<boolean>(props.checked || false);

  const dispatchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      setChecked(!isChecked);
      props.onClick && props.onClick(e);
    }
  };

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  return (
    <StyledToggleButton {...props} onClick={dispatchClick}>
      {isChecked ? props.checkedSVG : props.uncheckedSVG}
    </StyledToggleButton>
  );
};

export default ToggleButton;
export { ToggleButton, ToggleButtonProps };

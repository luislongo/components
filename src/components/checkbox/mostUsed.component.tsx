import ToggleButton from "./toggleButton.component";
import * as checkIcon from "./assets/checkbox.icon";
import * as radioIcon from "./assets/radio.icon";
import * as faveIcon from "./assets/star.icon";
import * as pinIcon from "./assets/pin.icon";
import React from "react";

export interface IconToggleProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Checkbox = (props: IconToggleProps) => {
  return (
    <ToggleButton
      checkedSVG={checkIcon.checked}
      uncheckedSVG={checkIcon.unchecked}
      {...props}
    />
  );
};

const RadioButton = (props: IconToggleProps) => {
  return (
    <ToggleButton
      checkedSVG={radioIcon.checked}
      uncheckedSVG={radioIcon.unchecked}
      {...props}
    />
  );
};

const FavoriteButton = (props: IconToggleProps) => {
  return (
    <ToggleButton
      checkedSVG={faveIcon.checked}
      uncheckedSVG={faveIcon.unchecked}
      {...props}
    />
  );
};

const PinButton = (props: IconToggleProps) => {
  return (
    <ToggleButton
      checkedSVG={pinIcon.checked}
      uncheckedSVG={pinIcon.unchecked}
      {...props}
    />
  );
};
export { Checkbox, RadioButton, FavoriteButton, PinButton };

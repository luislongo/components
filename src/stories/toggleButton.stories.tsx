import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { ToggleButton, ToggleButtonProps } from "../components/checkbox";
import * as checkIcon from "../components/checkbox/assets/checkbox.icon";
import * as radioIcon from "../components/checkbox/assets/radio.icon";
import * as faveIcon from "../components/checkbox/assets/star.icon";
import * as pinIcon from "../components/checkbox/assets/pin.icon";

export default {
  title: "ToggleButton",
  component: ToggleButton,
  argTypes: {
    className: { table: { disable: true } },
    uncheckedSVG: { table: { disable: true } },
    checkedSVG: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: Story<ToggleButtonProps> = (args: ToggleButtonProps) => (
  <ToggleButton {...args} />
);

export const Check = Template.bind({});
Check.args = {
  checked: true,
  disabled: false,
  checkedSVG: checkIcon.checked,
  uncheckedSVG: checkIcon.unchecked,
};

export const Radio = Template.bind({});
Radio.args = {
  checked: true,
  disabled: false,
  checkedSVG: radioIcon.checked,
  uncheckedSVG: radioIcon.unchecked,
};

export const Favorite = Template.bind({});
Favorite.args = {
  checked: true,
  disabled: false,
  checkedSVG: faveIcon.checked,
  uncheckedSVG: faveIcon.unchecked,
};

export const Pin = Template.bind({});
Pin.args = {
  checked: true,
  disabled: false,
  checkedSVG: pinIcon.checked,
  uncheckedSVG: pinIcon.unchecked,
};

import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { RadioGroup, ToggleButtonProps } from "../components";

export default {
  title: "RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Template: Story<ToggleButtonProps> = (args: ToggleButtonProps) => (
  <RadioGroup {...args} />
);

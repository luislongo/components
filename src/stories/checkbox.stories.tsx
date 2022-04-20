// Checkbox.stories.ts|tsx

import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { CheckboxProps, Checkbox } from "../components/checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Unclicked: ComponentStory<typeof Checkbox> = Template.bind({});
Unclicked.args = {
  checked: false,
  disabled: true,
};

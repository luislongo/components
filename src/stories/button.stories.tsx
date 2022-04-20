// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import Button from "../components/button";
import ButtonProps from "../components/button/button.props";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "disabled"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "compact"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} onClick={(e) => alert("Botão clicado.")} />
);

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  type: "primary",
  size: "default",
  children: "Primary button",
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  type: "secondary",
  size: "default",
  children: "😋😋😋😋",
};

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
Disabled.args = {
  type: "disabled",
  size: "default",
  children: "Disabled button",
};

export const Compact: ComponentStory<typeof Button> = Template.bind({});
Compact.args = {
  type: "primary",
  size: "compact",
  children: "Compact button",
};

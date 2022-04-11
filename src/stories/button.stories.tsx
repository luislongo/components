// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Normal: ComponentStory<typeof Button> = () => (
  <Button label="Button" type="default" />
);
export const Outlined: ComponentStory<typeof Button> = () => (
  <Button label="Button" type="outlined" />
);

export const Disabled: ComponentStory<typeof Button> = () => (
  <Button label="Button" type="default" disabled />
);

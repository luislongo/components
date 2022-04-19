// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button type="primary" size="compact">
    Primary button
  </Button>
);
export const Secondary: ComponentStory<typeof Button> = () => (
  <Button type="secondary" size="default">
    Secondary button
  </Button>
);
export const Disabled: ComponentStory<typeof Button> = () => (
  <Button type="disabled" size="default">
    Disabled button
  </Button>
);

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: "secondary",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  label: "Disabled",
  variant: "primary",
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  variant: "primary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  variant: "primary",
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  color: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Error",
  color: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  color: "warning",
};

export const Info = Template.bind({});
Info.args = {
  label: "Information",
  color: "info",
};

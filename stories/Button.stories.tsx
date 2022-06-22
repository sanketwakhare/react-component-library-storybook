import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: { control: "select" },
    disabled: { control: "radio" },
    size: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Primary",
  onClick: action("primary clicked"),
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
  variant: "disabled",
  disabled: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Error",
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  label: "Information",
  variant: "info",
};

export const Light = Template.bind({});
Light.args = {
  label: "Light",
  variant: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Dark",
  variant: "dark",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined-primary",
};

export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  label: "Outlined Success",
  variant: "outlined-success",
};

export const OutlinedDanger = Template.bind({});
OutlinedDanger.args = {
  label: "Outlined Error",
  variant: "outlined-danger",
};

export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  label: "Outlined Warning",
  variant: "outlined-warning",
};

export const OutlinedInfo = Template.bind({});
OutlinedInfo.args = {
  label: "Outlined Information",
  variant: "outlined-info",
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  label: "Outlined Dark",
  variant: "outlined-dark",
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

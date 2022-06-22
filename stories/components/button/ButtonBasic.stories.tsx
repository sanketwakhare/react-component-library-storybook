import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button/Basic",
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

/**
 * Primary button
 */
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
  onClick: action("primary clicked"),
};

/**
 * Success button
 */
export const Success = Template.bind({});
Success.args = {
  label: "Success",
  variant: "success",
};

/**
 * Danger button
 */
export const Danger = Template.bind({});
Danger.args = {
  label: "Error",
  variant: "danger",
};

/**
 * Warning button
 */
export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  variant: "warning",
};

/**
 * Info button
 */
export const Info = Template.bind({});
Info.args = {
  label: "Information",
  variant: "info",
};
/**
 * Light button
 */
export const Light = Template.bind({});
Light.args = {
  label: "Light",
  variant: "light",
};

/**
 * Dark button
 */
export const Dark = Template.bind({});
Dark.args = {
  label: "Dark",
  variant: "dark",
};

/**
 * Simple button as text
 */
export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
};

/**
 * Disabled button
 */
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  variant: "disabled",
  disabled: true,
};

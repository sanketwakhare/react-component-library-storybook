import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button/Outlined",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: { control: "select" },
    disabled: { control: "radio" },
    size: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/**
 * Outlined Primary button
 */
export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  label: "Outlined Primary",
  variant: "outlined-primary",
};

/**
 * Outlined Success button
 */
export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  label: "Outlined Success",
  variant: "outlined-success",
};

/**
 * Outlined Danger button
 */
export const OutlinedDanger = Template.bind({});
OutlinedDanger.args = {
  label: "Outlined Error",
  variant: "outlined-danger",
};

/**
 * Outlined Warning button
 */
export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  label: "Outlined Warning",
  variant: "outlined-warning",
};

/**
 * Outlined Info button
 */
export const OutlinedInfo = Template.bind({});
OutlinedInfo.args = {
  label: "Outlined Information",
  variant: "outlined-info",
};

/**
 * Outlined Dark button
 */
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  label: "Outlined Dark",
  variant: "outlined-dark",
};

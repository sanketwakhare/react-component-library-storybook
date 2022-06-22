import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button/Size",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: { control: "select" },
    disabled: { control: "radio" },
    size: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  variant: "primary",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium",
  variant: "primary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  variant: "primary",
};

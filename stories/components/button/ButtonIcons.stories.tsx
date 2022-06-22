import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button/Icons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: { control: "select" },
    disabled: { control: "radio" },
    size: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: "Back",
  startIconStyle: "bi bi-arrow-left",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: "Send",
  endIconStyle: "bi bi-send",
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  label: "",
  endIconStyle: "bi bi-cloud-arrow-down",
};

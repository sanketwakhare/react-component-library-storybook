import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this the principal call to action on the page?
   */
  variant?:
    | "primary"
    | "text"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "disabled"
    | "outlined-primary"
    | "outlined-success"
    | "outlined-danger"
    | "outlined-warning"
    | "outlined-info"
    | "outlined-dark";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?:
    | "small"
    | "medium"
    | "large"
    | "x-small"
    | "xx-small"
    | "x-large"
    | "xx-large";
  /**
   * is disabled
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Button component
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
      ].join(" ")}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

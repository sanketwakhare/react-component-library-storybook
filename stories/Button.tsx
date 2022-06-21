import React from "react";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "secondary" | "text";
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
   * Button contents
   */
  label: string;
  /**
   * is disabled
   */
  disabled?: boolean;
  /**
   * color
   */
  color?: "success" | "danger" | "warning" | "info";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  disabled,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        disabled ? `storybook-button--disabled` : ``,
        variant === "primary"
          ? color
            ? `storybook-button--${color}`
            : `storybook-button--${variant}`
          : ``,
        variant === "secondary"
          ? color
            ? `storybook-button--outline-${color}`
            : `storybook-button--${variant}`
          : ``,
      ].join(" ")}
      style={{ backgroundColor }}
      disabled={disabled}
      color={color}
      {...props}
    >
      {label}
    </button>
  );
};

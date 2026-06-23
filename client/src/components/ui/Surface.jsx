import { createElement } from "react";

const levels = {
  base: "bg-[var(--color-surface)] border border-[var(--color-border)]",
  elevated:
    "bg-[var(--color-surface-elevated)] border border-[var(--color-border)] shadow-[var(--shadow-soft)]",
  floating:
    "bg-[var(--color-surface-floating)] border border-[var(--color-border)] shadow-[var(--shadow-medium)] backdrop-blur-2xl",
  glass:
    "bg-[var(--color-surface-glass)] border border-[var(--color-border)] shadow-[var(--shadow-glass)] backdrop-blur-2xl",
};

const radii = {
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  xl: "rounded-[var(--radius-xl)]",
  "2xl": "rounded-[var(--radius-2xl)]",
  full: "rounded-[var(--radius-full)]",
};

export default function Surface({
  children,
  level = "base",
  radius = "lg",
  interactive = false,
  className = "",
  as: Component = "div",
  ...props
}) {
  return createElement(
    Component,
    {
      className: `${levels[level]} ${radii[radius]} ${interactive ? "surface-hover" : ""} ${className}`,
      ...props,
    },
    children
  );
}

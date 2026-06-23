import { createElement } from "react";

const widths = {
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
  xl: "max-w-[var(--container-xl)]",
};

export default function Container({ children, size = "lg", className = "", as: Component = "div" }) {
  return createElement(
    Component,
    { className: `mx-auto w-full px-[var(--page-gutter)] ${widths[size]} ${className}` },
    children
  );
}

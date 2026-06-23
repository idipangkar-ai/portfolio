import { createElement } from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  size = "lg",
  as: Component = "section",
}) {
  return createElement(
    Component,
    { className: `py-[var(--section-y)] ${className}` },
    <Container size={size} className={containerClassName}>
      {children}
    </Container>
  );
}

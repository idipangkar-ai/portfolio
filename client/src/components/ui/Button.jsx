import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const variants = {
  primary:
    "ui-button-primary shadow-[0_16px_42px_rgb(var(--color-accent-rgb)/0.14)] hover:opacity-90",
  secondary: "ui-button-secondary ring-1 ring-[var(--color-border)]",
  ghost: "ui-button-ghost",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  icon = true,
  className = "",
  type,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-[var(--duration-normal)] ease-[var(--ease-smooth)]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {icon && <FiArrowRight aria-hidden="true" className="text-base" />}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type ?? "button"} {...props}>
      {content}
    </button>
  );
}

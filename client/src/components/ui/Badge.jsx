const variants = {
  neutral: "bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
  accent: "bg-[rgb(var(--color-accent-rgb)/0.13)] text-[var(--color-text-primary)] border-[rgb(var(--color-accent-rgb)/0.22)]",
  success: "bg-[var(--color-surface-elevated)] text-[var(--color-success)] border-[var(--color-border)]",
};

export default function Badge({ children, variant = "neutral", className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-caption ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

import Surface from "./Surface";

export default function Card({ children, className = "", level = "base", interactive = false, as = "article" }) {
  return (
    <Surface as={as} level={level} radius="lg" interactive={interactive} className={`p-[var(--space-24)] ${className}`}>
      {children}
    </Surface>
  );
}


import { Link } from "react-router-dom";
import { navItems, siteMeta } from "../constants/site";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <Container className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <Link to="/" className="text-body font-bold text-[var(--color-text-primary)]">
            {siteMeta.name}
          </Link>
          <p className="text-body mt-4 max-w-md">{siteMeta.description}</p>
        </div>

        <div>
          <p className="text-caption text-[var(--color-text-primary)]">Navigation</p>
          <div className="text-body mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="transition hover:text-[var(--color-text-primary)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-caption text-[var(--color-text-primary)]">Connect</p>
          <div className="text-body mt-4 grid gap-2">
            {siteMeta.socials.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[var(--color-text-primary)]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-10 text-caption text-[var(--color-text-tertiary)]">
        &copy; {new Date().getFullYear()} {siteMeta.name}. Building from privacy, consent, and long-term trust.
      </Container>
    </footer>
  );
}

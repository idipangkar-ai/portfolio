import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems, siteMeta } from "../constants/site";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Surface from "./ui/Surface";
import ThemeSwitcher from "./ui/ThemeSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <Container size="lg" className="px-0">
        <Surface
          as="nav"
          level="floating"
          radius="full"
          className="flex items-center justify-between px-3 py-2"
        >
          <NavLink to="/" onClick={close} className="focus-ring flex items-center gap-3 rounded-full pr-3">
            <span className="brand-mark grid h-9 w-9 place-items-center rounded-full text-sm font-bold">
              DH
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-[var(--color-text-primary)] sm:block">
              {siteMeta.name}
            </span>
          </NavLink>

          <div className="hidden items-center rounded-full bg-[var(--color-surface)] p-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive ? "nav-item-active" : "nav-item-idle",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeSwitcher />
            <Button to="/contact" variant="secondary" className="px-4 py-2">
              Start a conversation
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </Surface>
      </Container>

      {open && (
        <Container size="lg" className="px-0 md:hidden">
        <Surface level="floating" radius="lg" className="mt-2 p-3">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={close}
                className={({ isActive }) =>
                  [
                    "focus-ring rounded-2xl px-4 py-3 text-base font-semibold transition",
                    isActive ? "nav-item-active" : "nav-item-idle",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 px-1">
            <ThemeSwitcher />
          </div>
        </Surface>
        </Container>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { THEME_STORAGE_KEY, resolveTheme, themes } from "../../constants/themes";
import Surface from "./Surface";

const icons = {
  system: FiMonitor,
  light: FiSun,
  dark: FiMoon,
  midnight: FiMoon,
  aurora: FiSun,
};

function getStoredTheme() {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return themes.some((theme) => theme.id === stored) ? stored : "system";
}

function applyTheme(theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = resolveTheme(theme, prefersDark);
  document.documentElement.dataset.themePreference = theme;
  document.documentElement.dataset.theme = resolved;
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (theme === "system") applyTheme("system");
    };

    query.addEventListener("change", handleSystemChange);
    return () => query.removeEventListener("change", handleSystemChange);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.add("theme-transition");
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 350);

    return () => window.clearTimeout(timer);
  }, [theme]);

  return (
    <Surface level="base" radius="full" className="flex items-center gap-1 p-1" aria-label="Theme switcher">
      {themes.map((item) => {
        const Icon = icons[item.id];
        const active = item.id === theme;

        return (
          <button
            key={item.id}
            type="button"
            className={[
              "focus-ring grid h-9 w-9 place-items-center rounded-full text-sm transition",
              active
                ? "nav-item-active"
                : "nav-item-idle",
            ].join(" ")}
            onClick={() => setTheme(item.id)}
            aria-label={`Use ${item.label} theme`}
            title={item.description}
          >
            <Icon aria-hidden="true" />
          </button>
        );
      })}
    </Surface>
  );
}

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themes = [
  {
    id: "system",
    label: "System",
    description: "Follow operating system preference",
  },
  {
    id: "light",
    label: "Light",
    description: "Apple-inspired bright interface",
  },
  {
    id: "dark",
    label: "Dark",
    description: "Premium graphite interface",
  },
  {
    id: "midnight",
    label: "Midnight",
    description: "Deep navy Linear-inspired interface",
  },
  {
    id: "aurora",
    label: "Aurora",
    description: "Subtle gradient-accented premium interface",
  },
];

export const themeIds = themes.map((theme) => theme.id);

export function resolveTheme(theme, prefersDark) {
  if (theme === "system") {
    return prefersDark ? "dark" : "light";
  }

  return themeIds.includes(theme) ? theme : "dark";
}


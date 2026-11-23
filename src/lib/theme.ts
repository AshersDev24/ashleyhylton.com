export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark";

/**
 * Runs in <head> before first paint. The server renders data-theme="dark";
 * this swaps to a stored choice so a light-theme visitor never sees a dark
 * flash. Storage can throw (private windows, blocked site data), so the
 * default stays in place if it does.
 */
export const themeInitScript = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The choice just won't be remembered next visit.
  }
}

/** Calls `onChange` whenever the theme attribute on <html> changes. */
export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

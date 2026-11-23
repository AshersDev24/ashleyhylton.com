import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = "dark";
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("offers the light theme when the page is dark", () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: "Switch to light theme" }),
    ).toBeInTheDocument();
  });

  it("switches theme, remembers the choice and updates its label", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: "Switch to light theme" }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(
      await screen.findByRole("button", { name: "Switch to dark theme" }),
    ).toBeInTheDocument();
  });

  it("works from the keyboard", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(document.documentElement.dataset.theme).toBe("light");
    await user.keyboard(" ");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("still switches when storage is blocked", async () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("follows a theme set elsewhere on the page", async () => {
    render(<ThemeToggle />);
    document.documentElement.dataset.theme = "light";
    expect(
      await screen.findByRole("button", { name: "Switch to dark theme" }),
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { teaPoweredClients } from "@/content/site";
import { ClientStrip } from "./ClientStrip";

describe("ClientStrip", () => {
  it("links each client once to its live site", () => {
    render(<ClientStrip />);
    const links = screen.getAllByRole("link", { name: /^.+ website$/ });
    expect(links).toHaveLength(teaPoweredClients.length);
    teaPoweredClients.forEach((client, i) => {
      expect(links[i]).toHaveAccessibleName(`${client.name} website`);
      expect(links[i]).toHaveAttribute("href", client.url);
    });
  });

  it("hides the looping copy from assistive tech and the keyboard", () => {
    const { container } = render(<ClientStrip />);
    const copy = container.querySelector('[aria-hidden="true"].strip-group');
    expect(copy).not.toBeNull();
    for (const link of copy!.querySelectorAll("a")) expect(link).toHaveAttribute("tabindex", "-1");
  });

  it("pauses and plays from a button", async () => {
    const { container } = render(<ClientStrip />);
    const button = screen.getByRole("button", { name: "Pause" });
    // The label carries the state, so no aria-pressed ("Play, pressed").
    expect(button).not.toHaveAttribute("aria-pressed");

    await userEvent.click(button);
    expect(button).toHaveTextContent("Play");
    expect(container.querySelector(".strip-track")).toHaveAttribute("data-paused", "true");
  });
});

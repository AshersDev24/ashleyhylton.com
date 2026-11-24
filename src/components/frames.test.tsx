import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { clientShots, fanClients } from "@/content/work";
import { BrowserFrame } from "./frames";
import { BublHubVisual, PhoneLineup, QuizWindow, TeaPoweredFan } from "./ProjectVisuals";

describe("frames", () => {
  it("shows the domain in the browser bar and keeps the screenshot decorative", () => {
    const { container } = render(
      <BrowserFrame image={clientShots["Peak Dinghy Spares"].image} domain="peakdinghy.com" sizes="400px" />,
    );
    expect(screen.getByText("peakdinghy.com")).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });

  it("fans out the three chosen client sites", () => {
    render(<TeaPoweredFan />);
    for (const name of fanClients) {
      expect(screen.getByText(clientShots[name].domain)).toBeInTheDocument();
    }
  });

  it.each([
    ["BublHubVisual", BublHubVisual],
    ["TeaPoweredFan", TeaPoweredFan],
    ["QuizWindow", QuizWindow],
    ["PhoneLineup", PhoneLineup],
  ])("%s is hidden from assistive tech", (_, Visual) => {
    const { container } = render(<Visual />);
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
    for (const img of container.querySelectorAll("img")) expect(img).toHaveAttribute("alt", "");
  });
});

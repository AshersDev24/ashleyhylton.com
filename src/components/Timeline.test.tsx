import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { timeline } from "@/content/site";
import { Timeline } from "./Timeline";

const events = () => within(screen.getByRole("list")).getAllByRole("listitem");
const titles = () =>
  events().map((li) => within(li).getByRole("heading").textContent);

describe("Timeline", () => {
  it("shows every event with All pressed", () => {
    render(<Timeline />);

    expect(events()).toHaveLength(timeline.length);
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
  });

  it("filters to one lane and marks only that filter pressed", async () => {
    const user = userEvent.setup();
    render(<Timeline />);

    await user.click(screen.getByRole("button", { name: "Client work" }));

    expect(titles()).toEqual(["Joined Tea Powered Projects"]);
    for (const button of screen.getAllByRole("button")) {
      expect(button).toHaveAttribute(
        "aria-pressed",
        String(button.textContent === "Client work"),
      );
    }
  });

  it("shows only BublHub events under BublHub", async () => {
    const user = userEvent.setup();
    render(<Timeline />);

    await user.click(screen.getByRole("button", { name: "BublHub" }));

    expect(events()).toHaveLength(timeline.filter((e) => e.lane === "own").length);
    for (const li of events()) {
      expect(li).toHaveTextContent("BublHub");
    }
  });

  it("goes back to everything with All", async () => {
    const user = userEvent.setup();
    render(<Timeline />);

    await user.click(screen.getByRole("button", { name: "Side projects" }));
    expect(titles()).toEqual(["Charity quiz app"]);
    await user.click(screen.getByRole("button", { name: "All" }));
    expect(events()).toHaveLength(timeline.length);
  });

  it("works from the keyboard", async () => {
    const user = userEvent.setup();
    render(<Timeline />);

    await user.tab(); // All
    await user.tab(); // Self-taught
    await user.keyboard("{Enter}");

    expect(screen.getByRole("button", { name: "Self-taught" })).toHaveAttribute("aria-pressed", "true");
    expect(titles()).toEqual(["Taught myself to code"]);
  });
});

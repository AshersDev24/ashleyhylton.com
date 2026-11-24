import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { timeline } from "@/content/site";
import { Timeline } from "./Timeline";

const events = () => within(screen.getByRole("list")).getAllByRole("listitem");

describe("Timeline", () => {
  it("shows every event in order", () => {
    render(<Timeline />);

    expect(events()).toHaveLength(timeline.length);
    expect(events().map((li) => within(li).getByRole("heading").textContent)).toEqual(
      timeline.map((e) => e.title),
    );
  });

  it("runs from teaching myself to code to the relaunch", () => {
    render(<Timeline />);

    expect(events()[0]).toHaveTextContent("Taught myself to code");
    expect(events().at(-1)).toHaveTextContent("Relaunch");
  });

  it("has no filters or tags", () => {
    render(<Timeline />);

    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });
});

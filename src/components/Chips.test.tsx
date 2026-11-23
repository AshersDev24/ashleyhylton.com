import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Chips } from "./Chips";

describe("Chips", () => {
  it("puts a decorative icon before labels that have one", () => {
    render(<Chips items={["Next.js 16", "BroadcastChannel"]} />);
    const list = screen.getByRole("list", { name: "Stack" });
    const [next, broadcast] = within(list).getAllByRole("listitem");

    expect(next).toHaveTextContent("Next.js 16");
    expect(next.querySelector('svg[aria-hidden="true"]')).not.toBeNull();
    expect(broadcast).toHaveTextContent("BroadcastChannel");
    expect(broadcast.querySelector("svg")).toBeNull();
  });
});

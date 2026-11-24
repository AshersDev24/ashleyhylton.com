import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RevealObserver } from "./RevealObserver";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;

describe("RevealObserver", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("reveals an element once it scrolls into view, then stops watching it", () => {
    let callback: Callback = () => {};
    const unobserve = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function (this: object, cb: Callback) {
        callback = cb;
        Object.assign(this, { observe: vi.fn(), unobserve, disconnect: vi.fn() });
      }),
    );
    render(
      <>
        <div data-reveal data-testid="a" />
        <RevealObserver />
      </>,
    );
    const a = screen.getByTestId("a");
    expect(a).not.toHaveClass("is-in");

    callback([{ isIntersecting: true, target: a }]);
    expect(a).toHaveClass("is-in");
    expect(unobserve).toHaveBeenCalledWith(a);
  });

  it("reveals everything straight away without IntersectionObserver", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    render(
      <>
        <div data-reveal data-testid="a" />
        <RevealObserver />
      </>,
    );
    expect(screen.getByTestId("a")).toHaveClass("is-in");
  });
});

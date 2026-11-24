import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useHideOnScroll } from "./useHideOnScroll";

function scrollTo(y: number) {
  act(() => {
    Object.defineProperty(window, "scrollY", { value: y, configurable: true });
    window.dispatchEvent(new Event("scroll"));
  });
}

describe("useHideOnScroll", () => {
  beforeEach(() => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    });
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });

  it("hides when scrolling down past the threshold", () => {
    const { result } = renderHook(() => useHideOnScroll());
    scrollTo(200);
    expect(result.current).toEqual({ hidden: true, scrolled: true });
  });

  it("stays hidden when a scroll event fires without moving", () => {
    const { result } = renderHook(() => useHideOnScroll());
    scrollTo(200);
    scrollTo(200);
    expect(result.current.hidden).toBe(true);
  });

  it("comes back when scrolling up", () => {
    const { result } = renderHook(() => useHideOnScroll());
    scrollTo(200);
    scrollTo(150);
    expect(result.current.hidden).toBe(false);
  });

  it("stays visible near the top of the page", () => {
    const { result } = renderHook(() => useHideOnScroll());
    scrollTo(80);
    expect(result.current).toEqual({ hidden: false, scrolled: true });
  });
});

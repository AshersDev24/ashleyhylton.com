import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CopyEmail } from "./CopyEmail";

const EMAIL = "someone@example.com";

// Call after userEvent.setup(), which installs its own clipboard stub.
function mockClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText: vi.fn(writeText) },
    configurable: true,
  });
  return navigator.clipboard.writeText as ReturnType<typeof vi.fn>;
}

describe("CopyEmail", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("copies the address and announces it", async () => {
    const user = userEvent.setup();
    const writeText = mockClipboard(() => Promise.resolve());
    render(<CopyEmail email={EMAIL} />);

    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    await user.click(screen.getByRole("button", { name: "Copy email" }));

    expect(writeText).toHaveBeenCalledWith(EMAIL);
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Email address copied");
  });

  it("goes back to its resting state after a moment", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    mockClipboard(() => Promise.resolve());
    render(<CopyEmail email={EMAIL} />);

    await user.click(screen.getByRole("button", { name: "Copy email" }));
    expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(screen.getByRole("button", { name: "Copy email" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("says so when the clipboard is unavailable", async () => {
    const user = userEvent.setup();
    mockClipboard(() => Promise.reject(new Error("denied")));
    render(<CopyEmail email={EMAIL} />);

    await user.click(screen.getByRole("button", { name: "Copy email" }));

    expect(screen.getByRole("button", { name: "Copy email" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Couldn't copy");
  });

  it("works from the keyboard", async () => {
    const user = userEvent.setup();
    const writeText = mockClipboard(() => Promise.resolve());
    render(<CopyEmail email={EMAIL} />);

    await user.tab();
    await user.keyboard("{Enter}");

    expect(writeText).toHaveBeenCalledWith(EMAIL);
  });
});

"use client";

import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

const RESET_AFTER_MS = 2400;

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let next: CopyState = "copied";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      next = "failed";
    }
    setState(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), RESET_AFTER_MS);
  }

  return (
    <>
      <button className="btn btn-ghost" type="button" onClick={copy}>
        {state === "copied" ? "Copied" : "Copy email"}
      </button>
      <span className="copied" role="status">
        {state === "copied" && "Email address copied"}
        {state === "failed" && "Couldn't copy. Select the address instead."}
      </span>
    </>
  );
}

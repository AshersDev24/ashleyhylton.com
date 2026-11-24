"use client";

import { useState } from "react";
import { teaPoweredClients } from "@/content/site";
import { clientShots } from "@/content/work";
import { BrowserFrame } from "./frames";

function Group({ copy }: { copy?: boolean }) {
  return (
    <ul className="strip-group" aria-hidden={copy || undefined}>
      {teaPoweredClients.map((client) => (
        <li key={client.name}>
          <a href={client.url} tabIndex={copy ? -1 : undefined}>
            <div aria-hidden="true">
              <BrowserFrame {...clientShots[client.name]} sizes="360px" />
            </div>
            <span className="strip-caption">
              <b>{client.name}</b>{" "}
              <span className="sr-only">website</span>
              <span aria-hidden="true">{client.type}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * The Tea Powered client sites drifting past. Pauses on hover and focus, and
 * from a button for touch screens (WCAG 2.2.2). With reduced motion it is a
 * still row that scrolls by hand.
 */
export function ClientStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="strip">
      <div className="strip-viewport">
        <div className="strip-track" data-paused={paused}>
          <Group />
          {/* A second copy makes the loop seamless. */}
          <Group copy />
        </div>
      </div>
      <button type="button" className="btn btn-ghost strip-toggle" onClick={() => setPaused((p) => !p)}>
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}

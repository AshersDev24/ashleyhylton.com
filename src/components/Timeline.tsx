"use client";

import { useState } from "react";
import {
  laneLabels,
  timeline,
  timelineFilters,
  type Lane,
} from "@/content/site";

const FIRST_YEAR = 2018;
const LAST_YEAR = 2027;

const laneClass: Record<Lane, string> = {
  learn: "lane lane-learn",
  client: "lane lane-client",
  own: "lane lane-own",
  side: "lane lane-learn",
};

const markedYears = new Set(timeline.map((e) => e.year));
const years = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, i) => String(FIRST_YEAR + i),
);

export function Timeline() {
  const [lane, setLane] = useState<Lane | "all">("all");
  const shown =
    lane === "all" ? timeline : timeline.filter((e) => e.lane === lane);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter the timeline">
        {timelineFilters.map((f) => (
          <button
            key={f.id}
            className="fbtn"
            type="button"
            aria-pressed={lane === f.id}
            onClick={() => setLane(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="ruler" aria-hidden="true">
        {years.map((y) => (
          <div key={y} className={markedYears.has(y) ? "tick on" : "tick"}>
            <span>{y}</span>
          </div>
        ))}
      </div>
      <ol className="events">
        {shown.map((e) => (
          <li key={`${e.year}-${e.title}`} className={e.lane}>
            <span className={laneClass[e.lane]}>{laneLabels[e.lane]}</span>
            <b>{e.year}</b>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

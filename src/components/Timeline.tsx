import { timeline } from "@/content/site";

const FIRST_YEAR = 2018;
const LAST_YEAR = 2027;

const markedYears = new Set(timeline.map((e) => e.year));
const years = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, i) => String(FIRST_YEAR + i),
);

export function Timeline() {
  return (
    <>
      <div className="ruler" aria-hidden="true">
        {years.map((y) => (
          <div key={y} className={markedYears.has(y) ? "tick on" : "tick"}>
            <span>{y}</span>
          </div>
        ))}
      </div>
      <ol className="events">
        {timeline.map((e) => (
          <li key={`${e.year}-${e.title}`}>
            <b>{e.year}</b>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export type DecorTone = "amber" | "rose" | "teal" | "violet" | "sky";

/**
 * Layered background for a section: two soft gradient pools, a ring, a
 * tilted tile and a patch of dots. Each tone has its own colours and layout.
 * Purely decorative, sits behind the content and never takes clicks.
 */
export function Decor({ tone }: { tone: DecorTone }) {
  return (
    <div className={`decor decor-${tone}`} aria-hidden="true">
      <span className="dx-pool dx-pool-a" />
      <span className="dx-pool dx-pool-b" />
      <span className="dx-ring" />
      <span className="dx-tile" />
      <span className="dx-dots" />
    </div>
  );
}

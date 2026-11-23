import { STATUS } from "@/content/site";

export function StatusPill() {
  return (
    <span className="status">
      <span className="dot" aria-hidden="true" />
      {STATUS}
    </span>
  );
}

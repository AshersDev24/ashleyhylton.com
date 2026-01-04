"use client";

function Radar({ tone }: { tone: "green" | "amber" }) {
  const solid = tone === "green" ? "var(--statusGreen)" : "var(--statusAmber)";
  const soft =
    tone === "green" ? "var(--statusGreenSoft)" : "var(--statusAmberSoft)";

  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full"
        style={{ background: soft }}
      />
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ background: solid }}
      />
    </span>
  );
}

export default function StatusRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "green" | "amber";
}) {
  return (
    <div className="status-row">
      <div className="flex items-center gap-3">
        <Radar tone={tone} />
        <div className="text-xs" style={{ color: "var(--muted)" }}>
          {label}
        </div>
      </div>
      <div className="text-xs font-medium">{value}</div>
    </div>
  );
}

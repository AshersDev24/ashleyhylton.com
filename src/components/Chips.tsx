import { toolIcon } from "@/content/tools";

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips" aria-label="Stack">
      {items.map((item) => {
        const icon = toolIcon(item);
        return (
          <li key={item} className="chip">
            {icon && (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={icon.path} />
              </svg>
            )}
            {item}
          </li>
        );
      })}
    </ul>
  );
}

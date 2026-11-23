export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips" aria-label="Stack">
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

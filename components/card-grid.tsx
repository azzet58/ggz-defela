export type CardItem = { title: string; text: string };

/** Raster met kaarten met een gekleurde bovenrand. */
export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3;
}) {
  return (
    <ul
      className={`grid gap-5 sm:grid-cols-2 lg:gap-6 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-2.5 rounded-2xl border border-t-4 border-line border-t-accent bg-white p-6 md:p-7"
        >
          <h3 className="font-display text-2xl font-medium">{item.title}</h3>
          <p className="leading-relaxed text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

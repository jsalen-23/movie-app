export default function PillList({
  items,
  classNames,
}: {
  items: string[];
  classNames?: string;
}) {
  return (
    <ul className={classNames}>
      {items.some(Boolean) &&
        items.map((item, index) => (
          <li
            key={index}
            className="text-gray-500 text-sm ml-2 first:ml-0 list-disc first:list-none"
          >
            {item}
          </li>
        ))}
    </ul>
  );
}

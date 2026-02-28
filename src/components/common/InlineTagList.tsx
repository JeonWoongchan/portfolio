interface InlineTagListProps {
    items: readonly string[];
    keyPrefix: string;
}

export default function InlineTagList({items, keyPrefix}: InlineTagListProps) {
    return (
        <ul className="flex gap-2 flex-wrap">
            {items.map((item) => (
                <li
                    key={`${keyPrefix}-${item}`}
                    className="inline-flex items-center rounded-full bg-(--color-border-light) px-3 py-1 text-center text-xs text-gray-300"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

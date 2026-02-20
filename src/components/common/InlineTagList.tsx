interface InlineTagListProps {
    items: readonly string[];
    keyPrefix: string;
}

export default function InlineTagList({items, keyPrefix}: InlineTagListProps) {
    return (
        <ul className="flex flex-col gap-2 md:flex-row">
            {items.map((item) => (
                <li
                    key={`${keyPrefix}-${item}`}
                    className="inline-flex items-center rounded-sm bg-(--color-border-light) px-2 py-1 text-center text-xs text-white"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

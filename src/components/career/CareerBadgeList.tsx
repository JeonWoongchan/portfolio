interface CareerBadgeListProps {
    company: string;
    badges: readonly string[];
}

export default function CareerBadgeList({company, badges}: CareerBadgeListProps) {
    return (
        <ul className="flex flex-wrap gap-2">
            {badges.map((badge) => (
                <li
                    key={`${company}-${badge}`}
                    className="rounded-full border border-(--color-cyan) bg-[rgba(3,232,249,0.1)] px-3 py-1 text-xs text-(--color-accent)"
                >
                    {badge}
                </li>
            ))}
        </ul>
    );
}

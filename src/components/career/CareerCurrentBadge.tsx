interface CareerCurrentBadgeProps {
    label: string;
}

export default function CareerCurrentBadge({label}: CareerCurrentBadgeProps) {
    return (
        <span className="inline-flex items-center rounded-full border border-(--color-teal) bg-(--color-badge-bg) px-2 py-0.5 text-xs font-medium text-(--color-accent)">
            <span className="mr-1 size-1.5 animate-pulse rounded-full bg-(--color-highlight)" />
            {label}
        </span>
    );
}

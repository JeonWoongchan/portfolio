import type {LucideIcon} from 'lucide-react';

interface CareerMetaItemProps {
    icon: LucideIcon;
    text: string;
}

export default function CareerMetaItem({icon: Icon, text}: CareerMetaItemProps) {
    return (
        <div className="flex items-center gap-2">
            <Icon className="size-4 text-(--color-accent)" aria-hidden="true" />
            <span>{text}</span>
        </div>
    );
}

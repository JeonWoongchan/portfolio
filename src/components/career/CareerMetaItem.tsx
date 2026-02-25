import type {LucideIcon} from 'lucide-react';
import {VerticalInsetDivider} from "@/src/components/common/VerticalDivider";

interface CareerMetaItemProps {
    icon: LucideIcon;
    text: string;
}

export default function CareerMetaItem({icon: Icon, text}: CareerMetaItemProps) {
    return (
        <VerticalInsetDivider side="left">
            <div className="flex items-center gap-2">
                <Icon className="size-4 text-(--color-accent)" aria-hidden="true" />
                <span>{text}</span>
            </div>
        </VerticalInsetDivider>
    );
}

import type {LucideIcon} from 'lucide-react';
import {SmallText} from "@/src/components/common/Typography";
import {cn} from "@/lib/utils";

interface CareerMetaItemProps {
        icon: LucideIcon;
        text: string;
        iconClassName?: string;
        textClassName?: string;
}

export default function CareerMetaItem({icon: Icon, text, iconClassName, textClassName}: CareerMetaItemProps) {
        return (
                    <div className="flex items-center gap-2">
                            <Icon className={cn("size-4 text-(--color-accent)", iconClassName)} aria-hidden="true" />
                            <SmallText className={cn(textClassName)}>{text}</SmallText>
                    </div>
        );
}

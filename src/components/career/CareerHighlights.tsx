import { ArrowUpRight } from 'lucide-react';
import { useCareerCardItem } from '@/src/components/career/CareerCardContext';
import {SmallText} from "@/src/components/common/Typography";

const HIGHLIGHT_LABEL = 'KEY HIGHLIGHTS';

export default function CareerHighlights() {
    const item = useCareerCardItem();

    return (
        <div className="min-w-0">
            <div className="mb-2 flex items-center gap-3">
                <p className="text-xs tracking-wide text-(--color-accent)">
                    {HIGHLIGHT_LABEL}
                </p>
                <span className="h-px flex-1 bg-(--color-border)" />
            </div>
            <ul className="space-y-4">
                {item.highlights.map((highlight) => (
                    <li key={`${item.company}-${highlight}`} className="flex items-start gap-2 text-sm text-white">
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-(--color-accent)" aria-hidden="true" />
                        <SmallText>{highlight}</SmallText>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { ArrowUpRight } from 'lucide-react';
import { useCareerCardItem } from '@/src/components/career/CareerCardContext';

const HIGHLIGHT_LABEL = 'KEY HIGHLIGHTS';

export default function CareerHighlights() {
    const item = useCareerCardItem();

    return (
        <div className="min-w-0 md:basis-[30%] md:max-w-[30%]">
            <p className="mb-4 text-xs tracking-wide text-(--color-text-muted)">{HIGHLIGHT_LABEL}</p>
            <ul className="space-y-4">
                {item.highlights.map((highlight) => (
                    <li key={`${item.company}-${highlight}`} className="flex items-start gap-2 text-sm text-white">
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-(--color-accent)" aria-hidden="true" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

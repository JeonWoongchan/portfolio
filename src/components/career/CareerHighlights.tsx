import {ArrowUpRight} from 'lucide-react';

const HIGHLIGHT_LABEL = 'KEY HIGHLIGHTS';

interface CareerHighlightsProps {
    company: string;
    highlights: readonly string[];
}

export default function CareerHighlights({company, highlights}: CareerHighlightsProps) {
    return (
        <div className="border-t border-(--color-border) pt-4">
            <p className="mb-1.5 text-xs tracking-wide text-(--color-text-muted)">{HIGHLIGHT_LABEL}</p>
            <ul className="space-y-1.5">
                {highlights.map((highlight) => (
                    <li key={`${company}-${highlight}`} className="flex items-start gap-2 text-sm text-white">
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-(--color-accent)" aria-hidden="true" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

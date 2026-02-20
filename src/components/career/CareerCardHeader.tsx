import {BriefcaseBusiness} from 'lucide-react';
import type {CareerItem} from '@/src/types/career';
import CareerCurrentBadge from '@/src/components/career/CareerCurrentBadge';

interface CareerCardHeaderProps {
    item: Pick<CareerItem, 'company' | 'period' | 'isCurrent'>;
}

const CURRENT_LABEL = '현재 중';

export default function CareerCardHeader({item}: CareerCardHeaderProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="rounded-xl border border-(--color-border-light) bg-(--color-navy) p-3">
                <BriefcaseBusiness className="size-5 text-(--color-accent)" aria-hidden="true" />
            </div>
            <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
                    {item.isCurrent ? <CareerCurrentBadge label={CURRENT_LABEL} /> : null}
                </div>
                <p className="text-sm font-medium text-(--color-accent)">{item.period}</p>
            </div>
        </div>
    );
}

import {BriefcaseBusiness, MapPin, Users2} from 'lucide-react';
import type {CareerItem} from '@/src/types/career';
import CareerCurrentBadge from '@/src/components/career/CareerCurrentBadge';
import React from "react";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";
import {BodyText} from "@/src/components/Typography";
import StackCardList from "@/src/components/common/StackCardList";

interface CareerCardHeaderProps {
    item: Pick<CareerItem, 'company' | 'period' | 'quote' | 'location' | 'team' | 'stack' | 'isCurrent'>;
}

const CURRENT_LABEL = '재직 중';

export default function CareerCardHeader({item}: CareerCardHeaderProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="rounded-xl border border-(--color-border-light) bg-(--color-navy) p-3">
                    <BriefcaseBusiness className="size-5 text-(--color-accent)" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                        <BodyText className="font-bold lg:text-xl">{item.company}</BodyText>
                        {item.isCurrent ? <CareerCurrentBadge label={CURRENT_LABEL} /> : null}
                    </div>
                    <div className="flex gap-4 text-sm text-(--color-text-secondary)">
                        <p className="text-sm font-medium text-(--color-accent)">{item.period}</p>
                        <CareerMetaItem icon={MapPin} text={item.location} />
                        <CareerMetaItem icon={Users2} text={item.team} />
                    </div>
                </div>
                <StackCardList
                    stackNames={item.stack}
                    keyPrefix={`${item.company}-${item.stack}`}
                    compact={true}
                    className="absolute right-6"
                />
            </div>
            <p className="text-sm font-medium text-(--color-accent)">{item.quote}</p>
        </div>
    );
}

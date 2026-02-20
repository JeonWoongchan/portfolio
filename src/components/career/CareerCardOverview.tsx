import {MapPin, Users2} from 'lucide-react';
import type {CareerItem} from '@/src/types/career';
import {SmallText} from '@/src/components/Typography';
import CareerMetaItem from '@/src/components/career/CareerMetaItem';
import CareerBadgeList from '@/src/components/career/CareerBadgeList';
import CareerStackIcons from '@/src/components/career/CareerStackIcons';
import CareerHighlights from '@/src/components/career/CareerHighlights';
import CareerCardHeader from '@/src/components/career/CareerCardHeader';

interface CareerCardOverviewProps {
    item: CareerItem;
}

export default function CareerCardOverview({item}: CareerCardOverviewProps) {
    return (
        <div className="space-y-4 border-r-0 border-(--color-border) p-6 lg:border-r">
            <CareerCardHeader item={item} />

            <SmallText className="text-sm text-(--color-text-secondary)">{item.quote}</SmallText>

            <div className="flex gap-4 text-sm text-(--color-text-secondary)">
                <CareerMetaItem icon={MapPin} text={item.location} />
                <CareerMetaItem icon={Users2} text={item.role} />
            </div>

            <CareerBadgeList company={item.company} badges={item.badges} />
            <CareerStackIcons company={item.company} stack={item.stack} />
            <CareerHighlights company={item.company} highlights={item.highlights} />
        </div>
    );
}

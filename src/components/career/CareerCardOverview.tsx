'use client'

import type {CareerItem} from '@/src/types/career';
import CareerHighlights from '@/src/components/career/CareerHighlights';
import CareerCardHeader from '@/src/components/career/CareerCardHeader';
import CareerCardProjects from "@/src/components/career/CareerCardProjects";
import {useState} from "react";

interface CareerCardOverviewProps {
    item: CareerItem;
}

export default function CareerCardOverview({item}: CareerCardOverviewProps) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        // <div className="space-y-4 border-r-0 border-(--color-border) p-6 lg:border-r">
        //     <CareerCardHeader item={item} />
        //
        //     <SmallText className="text-sm text-(--color-text-secondary)">{item.quote}</SmallText>
        //
        //     <div className="flex gap-4 text-sm text-(--color-text-secondary)">
        //         <CareerMetaItem icon={MapPin} text={item.location} />
        //         <CareerMetaItem icon={Users2} text={item.role} />
        //     </div>
        //
        //     <CareerBadgeList company={item.company} badges={item.badges} />
        //     <CareerStackIcons company={item.company} stack={item.stack} />
        //     <CareerHighlights company={item.company} highlights={item.highlights} />
        // </div>
        <div className="flex">
            <div className={`${isExpanded ? 'w-[30%]' : 'w-full'} shrink-0 border-(--color-border) p-6`}>
                <CareerCardHeader item={item} />
                <CareerHighlights company={item.company} highlights={item.highlights}/>
                <div className="text-center md:absolute top-5 right-5 cursor-pointer text-sm font-medium text-(--color-accent)"
                    onClick={() => setExpanded(!isExpanded)}
                >
                    자세히
                </div>
            </div>
            {isExpanded && <CareerCardProjects item={item} />}
        </div>
    );
}

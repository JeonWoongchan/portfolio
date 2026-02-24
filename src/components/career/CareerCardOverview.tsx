import type {CareerItem} from '@/src/types/career';
import CareerCardHeader from '@/src/components/career/CareerCardHeader';
import CareerBadgeList from "./CareerBadgeList";
import InlineTagList from "@/src/components/common/InlineTagList";

interface CareerCardOverviewProps {
    item: CareerItem;
}

export default function CareerCardOverview({item}: CareerCardOverviewProps) {
    const projectTitles = item.projects.map((project) => project.title);

    return (
        <div className="space-y-4 p-6">
            <CareerCardHeader item={item} />
            <div className="flex gap-4">
                <CareerBadgeList company={item.company} badges={item.badges} />
                <InlineTagList items={projectTitles} keyPrefix={`${item.company}-projects`} />
            </div>
        </div>
    );
}

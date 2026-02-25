import CareerCardHeader from '@/src/components/career/CareerCardHeader';
import CareerBadgeList from '@/src/components/career/CareerBadgeList';
import InlineTagList from '@/src/components/common/InlineTagList';
import { useCareerCardItem } from '@/src/components/career/CareerCardContext';

export default function CareerCardOverview() {
    const item = useCareerCardItem();
    const projectTitles = item.projects.map((project) => project.title);

    return (
        <div className="space-y-4 p-6">
            <CareerCardHeader />
            <div className="flex gap-4">
                <CareerBadgeList company={item.company} badges={item.badges} />
                <InlineTagList items={projectTitles} keyPrefix={`${item.company}-projects`} />
            </div>
        </div>
    );
}

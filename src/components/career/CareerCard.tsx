import type {CareerItem} from '@/src/types/career';
import CareerCardOverview from '@/src/components/career/CareerCardOverview';

interface CareerCardProps {
    item: CareerItem;
}

export default function CareerCard({item}: CareerCardProps) {
    return (
        // <article className="grid w-full grid-cols-1 rounded-2xl border border-(--color-border-light) bg-(--career-card-bg) lg:grid-cols-[1fr_2fr]">
        //     <CareerCardOverview item={item} />
        //     <CareerCardProjects item={item} />
        // </article>
        <article className="w-full rounded-2xl border border-(--color-border-light) bg-(--color-navy)">
            <CareerCardOverview item={item} />
        </article>
    );
}

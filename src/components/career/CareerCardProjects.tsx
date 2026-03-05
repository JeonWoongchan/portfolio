import { BodyText, SmallText } from '@/src/components/common/Typography';
import StackCardList from '@/src/components/common/StackCardList';
import { VerticalDivider } from '@/src/components/common/VerticalDivider';
import { useCareerCardItem } from '@/src/components/career/CareerCardContext';
import {Card, CardContent} from '@/components/ui/card';
import CareerBadgeList from "@/src/components/career/CareerBadgeList";
import { sortByLatestPeriod } from "@/src/utils/yearMonthPeriod";
import CareerHighlights from "@/src/components/career/CareerHighlights";

export default function CareerCardProjects() {
    const item = useCareerCardItem();
    const sortedProjects = sortByLatestPeriod(item.projects);

    return (
        <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xs tracking-wide text-(--color-text-muted)">PROJECTS ({item.projects.length})</h4>
            </div>

            <ul className="space-y-2">
                {sortedProjects.map((project) => (
                    <li key={`${item.company}-${project.title}`}>
                        <Card className="gap-2 p-4">
                            <CardContent className="space-y-2 p-0">
                                <div className="flex gap-4">
                                    <VerticalDivider className="w-0.5 mx-0 h-auto rounded-full bg-(--color-accent)" />
                                    <div className="w-full space-y-4">
                                        <div className="flex justify-between">
                                            <BodyText>{project.title}</BodyText>
                                            <StackCardList
                                                stackNames={project.stack}
                                                keyPrefix={`${item.company}-${project.title}`}
                                                compact={true}
                                            />
                                        </div>
                                        <div className="flex">
                                            <SmallText>{project.periodStart} ~ {project.periodEnd}</SmallText>
                                            <VerticalDivider className="h-auto bg-(--color-border)" />
                                            <CareerBadgeList company={item.company} badges={project.roles} />
                                        </div>
                                        <SmallText>{project.description}</SmallText>
                                        <CareerHighlights />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
}

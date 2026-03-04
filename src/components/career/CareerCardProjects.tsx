import { BodyText, SmallText } from '@/src/components/common/Typography';
import StackCardList from '@/src/components/common/StackCardList';
import { VerticalDivider } from '@/src/components/common/VerticalDivider';
import { useCareerCardItem } from '@/src/components/career/CareerCardContext';
import { CardContent, CardLink } from '@/components/ui/card';
import CareerBadgeList from "@/src/components/career/CareerBadgeList";
import {ExternalLink} from "lucide-react";
import { compareYearMonthRangeByLatest, formatYearMonthRange } from "@/src/utils/yearMonthPeriod";

export default function CareerCardProjects() {
    const item = useCareerCardItem();
    const sortedProjects = [...item.projects].sort(compareYearMonthRangeByLatest);

    return (
        <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xs tracking-wide text-(--color-text-muted)">PROJECTS ({item.projects.length})</h4>
            </div>

            <ul className="space-y-2">
                {sortedProjects.map((project) => (
                    <li key={`${item.company}-${project.title}`}>
                        <CardLink href={project.link} target="_blank" cardClassName="group gap-2 p-4">
                            <CardContent className="space-y-2 p-0">
                                <div className="flex gap-4">
                                    <VerticalDivider className="w-0.5 mx-0 h-auto rounded-full bg-(--color-accent)" />
                                    <div className="w-full space-y-2">
                                        <div className="flex justify-between">
                                            <BodyText>{project.title}</BodyText>
                                            <ExternalLink className="ml-auto size-3.5 shrink-0 text-(--color-text-muted) opacity-0 transition-opacity group-hover:opacity-100" />
                                        </div>
                                        <SmallText>{formatYearMonthRange(project.periodStart, project.periodEnd)}</SmallText>
                                        <SmallText>{project.description}</SmallText>
                                        <div className="flex">
                                            <CareerBadgeList company={item.company} badges={project.roles} />
                                            <VerticalDivider className="h-auto bg-(--color-border)" />
                                            <StackCardList
                                                stackNames={item.stack}
                                                keyPrefix={`${item.company}-${project.title}`}
                                                compact={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </CardLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

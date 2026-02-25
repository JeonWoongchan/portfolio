import type {CareerItem} from '@/src/types/career';
import {SmallText} from '@/src/components/Typography';
import StackCardList from "@/src/components/common/StackCardList";
import InlineTagList from "@/src/components/common/InlineTagList";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";

interface CareerCardProjectsProps {
    item: CareerItem;
}

export default function CareerCardProjects({item}: CareerCardProjectsProps) {
    return (
        <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xs tracking-wide text-(--color-text-muted)">PROJECTS ({item.projects.length})</h4>
            </div>

            <ul className="space-y-3">
                {item.projects.map((project) => (
                    <li
                        key={`${item.company}-${project.title}`}
                        className="rounded-xl border border-(--color-border) p-4"
                    >
                        <div className="flex gap-4">
                            <VerticalDivider className="h-auto w-0.5 rounded-full bg-(--color-accent)" />
                            <div className="space-y-2">
                                <p className="text-base font-semibold text-white">{project.title}</p>
                                <p className="text-(--color-text-secondary)">{project.period}</p>
                                <SmallText>{project.description}</SmallText>
                            <div className="flex gap-4">
                                <InlineTagList
                                    items={project.roles}
                                    keyPrefix={`${item.company}-${project.title}-roles`}
                                />
                                <StackCardList
                                    stackNames={item.stack}
                                    keyPrefix={`${item.company}-${project.title}`}
                                    compact={true}
                                    border={true}
                                />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import {SkillCategory} from "@/src/types/skills";
import {GridContainer} from "@/src/components/common/Container";
import SkillCardDetail from "@/src/components/skills/SkillCardDetail";
import type {StackName} from "@/src/types/stack";
import StackCardList from "@/src/components/common/StackCardList";

interface SkillRowsProps {
        category: SkillCategory;
        isAllSelected: boolean;
}

export default function SkillRows({category, isAllSelected}: SkillRowsProps) {
        const stackNames = category.items.map((item) => item.name as StackName);

        return (
                <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                                <h3 className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                        {category.title}
                                </h3>
                                <div className="h-px flex-1 bg-accent opacity-10"/>
                        </div>

                        {isAllSelected ?
                                <StackCardList
                                    stackNames={stackNames}
                                    keyPrefix={category.key}
                                />
                                :
                                <GridContainer className="2xl:grid-cols-3">
                                        {category.items.map((item, i) => (
                                                <SkillCardDetail key={`${category.key}-${item.name}-${i}`} item={item} />
                                        ))}
                                </GridContainer>
                        }
                </div>
        );
}

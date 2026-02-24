import {SkillCategory} from "@/src/types/skills";
import React from "react";
import {GridContainer} from "@/src/components/Container";
import SkillCardDetail from "@/src/components/skills/SkillCardDetail";
import type {StackName} from "@/src/types/stack";
import StackCardList from "@/src/components/common/StackCardList";

export default function SkillRows({section, detail}: { section: SkillCategory; detail: boolean }) {
    const stackNames = section.items.map((item) => item.name as StackName);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <h3 className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {section.title}
                </h3>
                <div className="h-px flex-1 bg-accent opacity-10"/>
            </div>

            {detail ?
                <GridContainer className={"gap-4"}>
                    {section.items.map((item, i) => (
                        <SkillCardDetail key={`${section.key}-${item.name}-${i}`} item={item} />
                    ))}
                </GridContainer>
                :
                <StackCardList
                    stackNames={stackNames}
                    keyPrefix={section.key}
                />
            }
        </div>
    );
}

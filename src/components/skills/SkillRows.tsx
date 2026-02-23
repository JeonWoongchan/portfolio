import {SkillCategory} from "@/src/types/skills";
import React from "react";
import SkillCard from "@/src/components/skills/SkillCard";
import {GridContainer} from "@/src/components/Container";
import SkillCardDetail from "@/src/components/skills/SkillCardDetail";

export default function SkillRows({ section, detail }: { section: SkillCategory; detail: boolean }) {
    const Card = detail ? SkillCardDetail : SkillCard;
    const cards = section.items.map((item, i) => (
        <Card key={`${section.key}-${item.name}-${i}`} item={item} />
    ));

    return (
        <div className="flex flex-col gap-3">
            {/* Category Label */}
            <div className="flex items-center gap-3">
                <h3 className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {section.title}
                </h3>
                <div className="h-px flex-1 bg-accent opacity-10" />
            </div>

            {detail ?
                <GridContainer className={"gap-4"}>{cards}</GridContainer>
                :
                <div className={"flex flex-wrap gap-4"}>{cards}</div>
            }
        </div>
    );
}
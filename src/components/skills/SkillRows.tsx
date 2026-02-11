import {SkillCategory} from "@/src/types/skills";
import React from "react";
import SkillChip from "@/src/components/skills/SkillChip";

export default function SkillRows({ section }: { section: SkillCategory; reverse?: boolean;}) {
    // Marquee용 배열
    // const repeated = Array(8).fill(section.items).flat();

    return (
        <div className="flex flex-col gap-3">
            {/* Category Label */}
            <div className="flex items-center gap-3">
                <h3 className="px-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {section.title}
                </h3>
                <div className="h-px flex-1 bg-accent opacity-10" />
            </div>

            {/* Marquee Track: 비활성화 */}
            {/*<div className="marquee-track relative overflow-hidden">*/}
            {/*    /!* Edge fades *!/*/}
            {/*    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-black to-transparent" />*/}
            {/*    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-black to-transparent" />*/}

            {/*    <div*/}
            {/*        className={cn(*/}
            {/*            "marquee-inner flex w-max gap-3 py-3",*/}
            {/*            reverse ? "marquee-reverse" : "marquee"*/}
            {/*        )}*/}
            {/*    >*/}
            {/*        {repeated.map((item, i) => (*/}
            {/*            <SkillChip key={`${section.key}-${item.name}-${i}`} item={item} />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div
                className={"flex w-max gap-3 py-3"}
            >
                {section.items.map((item, i) => (
                    <SkillChip key={`${section.key}-${item.name}-${i}`} item={item} />
                ))}

            </div>
        </div>
    );
}
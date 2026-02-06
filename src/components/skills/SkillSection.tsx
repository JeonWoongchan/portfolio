'use client'

import {cn} from "@/lib/utils";
import SkillItemCard from "@/src/components/skills/SkillItemCard";
import {SkillCategory} from "@/src/types/skills";

export default function SkillSection({
    section,
    reverse = false,
}: {
    section: SkillCategory;
    reverse?: boolean;
}) {
    // Repeat items enough for a seamless loop
    const repeated = Array(6).fill(section.items).flat();

    return (
        <div className="flex flex-col gap-3">
            {/* Category Label */}
            <div className="flex items-center gap-3 px-1">
                <h3 className="shrink-0 text-sm font-semibold uppercase tracking-widest text-(--color-accent)">
                    {section.title}
                </h3>
                <div className="h-px flex-1 bg-gray-600/50" />
            </div>

            {/* Marquee Track */}
            <div className="marquee-track relative overflow-hidden">
                {/* Edge fade gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-(--color-primary) to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-(--color-primary) to-transparent" />

                <div
                    className={cn(
                        "flex w-max gap-3 pb-2",
                        reverse ? "marquee-reverse" : "marquee",
                    )}
                >
                    {repeated.map((item, i) => (
                        <SkillItemCard
                            key={`${section.key}-${item.name}-${i}`}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

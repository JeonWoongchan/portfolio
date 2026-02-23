'use client'

import React, { useMemo, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SkillRows from "@/src/components/skills/SkillRows";
import { SkillCategory } from "@/src/types/skills";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

interface SkillListProps {
    sections: readonly SkillCategory[];
}

const ALL_CATEGORY_KEY = "all" as const;

// TODO: Sections props명 수정
export default function SkillCardList({ sections }: SkillListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY_KEY);

    const totalItemCount = useMemo(
        () => sections.reduce((sum, section) => sum + section.items.length, 0),
        [sections]
    );

    const categoryOptions = useMemo(() => {
        const options = sections.map(({ key, title, items }) => ({
            key,
            title,
            count: items.length,
        }));

        return [{ key: ALL_CATEGORY_KEY, title: "All", count: totalItemCount }, ...options];
    }, [sections, totalItemCount]);

    const filteredSections =
        selectedCategory === ALL_CATEGORY_KEY
            ? sections
            : sections.filter((section) => section.key === selectedCategory);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-start">
                <ToggleGroup
                    type="single"
                    value={selectedCategory}
                    spacing={2}
                    onValueChange={(value: string) => {
                        if (value) {
                            setSelectedCategory(value);
                        }
                    }}
                    className="flex-wrap"
                >
                    {categoryOptions.map((option) => (
                        <Tooltip key={option.key}>
                            <TooltipTrigger asChild>
                              <span className="inline-flex">
                                <ToggleGroupItem value={option.key} className={"px-8"}>
                                  {option.title}
                                </ToggleGroupItem>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent
                                side="top"
                                align="end"
                                sideOffset={-10}
                                className="bg-(--color-accent-variant) text-black rounded-full size-8 min-w-8 flex items-center justify-center text-xs font-semibold"
                            >
                                {option.count}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </ToggleGroup>
            </div>

            <div className="flex flex-col gap-4">
                {filteredSections.map((section) => (
                    <SkillRows
                        key={section.key}
                        section={section}
                        detail={selectedCategory !== ALL_CATEGORY_KEY}
                    />
                ))}
            </div>
        </div>
    );
}

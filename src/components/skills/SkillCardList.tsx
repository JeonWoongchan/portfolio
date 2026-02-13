import {SkillCategory} from "@/src/types/skills";
import React, {useState} from "react";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import SkillRows from "@/src/components/skills/SkillRows";

interface SkillListProps {
    sections: SkillCategory[];
}

export default function SkillCardList({ sections }: SkillListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // 필터링된 섹션들
    const filteredSections = selectedCategory === 'all'
        ? sections
        : sections.filter(section => section.key === selectedCategory);

    return (
        <div className="flex flex-col gap-6">
            {/* Toggle Group */}
            <div className="flex justify-start">
                <ToggleGroup
                    type="single"
                    value={selectedCategory}
                    defaultValue="all"
                    spacing={2}
                    onValueChange={(value: string) => value && setSelectedCategory(value)}
                    className={"flex-wrap"}
                >
                    <ToggleGroupItem value="all">All</ToggleGroupItem>
                    {sections.map(section => (
                        <ToggleGroupItem
                            key={section.key}
                            value={section.key}
                        >
                            {section.title}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div>

            {/* Skill Rows */}
            <div className="flex flex-col gap-4">
                {filteredSections.map((section) => (
                    <SkillRows
                        key={section.key}
                        section={section}
                        detail={selectedCategory !== 'all'}
                    />
                ))}
            </div>
        </div>
    );
}
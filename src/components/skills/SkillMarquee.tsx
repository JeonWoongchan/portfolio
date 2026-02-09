import {SkillCategory} from "@/src/types/skills";
import React, {useState} from "react";
import MarqueeRow from "@/src/components/skills/MarqueeRow";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";

interface SkillMarqueeProps {
    sections: SkillCategory[];
}

// TODO: 토글 텍스트 및 배경색 변경
export default function SkillMarquee({ sections }: SkillMarqueeProps) {
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

            {/* Marquee Rows */}
            <div className="flex flex-col gap-8">
                {filteredSections.map((section, index) => (
                    <MarqueeRow
                        key={section.key}
                        section={section}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
}
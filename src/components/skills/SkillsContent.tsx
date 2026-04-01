'use client'

import SkillRows from "@/src/components/skills/SkillRows";
import { SkillCategory } from "@/src/types/skills";
import CategoryFilterToggle from "@/src/components/common/CategoryFilterToggle";
import { useSectionVisible } from "@/src/components/common/Container";
import { useCategoryFilter } from "@/src/hooks/shared/useCategoryFilter";
import { useRevealStyle } from "@/src/hooks/ui/useRevealStyle";
import { cn } from "@/lib/utils";

const TOGGLE_DELAY_MS = 100;
const ROW_BASE_DELAY_MS = 220;
const ROW_STAGGER_DELAY_MS = 90;

interface SkillsContentProps {
    categories: readonly SkillCategory[];
}

export default function SkillsContent({ categories }: SkillsContentProps) {
    const isVisible = useSectionVisible();
    const { revealClassName, getRevealStyle } = useRevealStyle({ isVisible });
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories, isAllSelected } =
        useCategoryFilter({ categories });

    return (
        <div className="flex flex-col gap-6">
            <div
                className={cn("flex justify-start", revealClassName)}
                style={getRevealStyle(TOGGLE_DELAY_MS)}
            >
                <CategoryFilterToggle
                    selectedKey={selectedKey}
                    options={categoryOptions}
                    onSelect={setSelectedKey}
                />
            </div>

            <div className="flex flex-col gap-4">
                {filteredCategories.map((category, index) => (
                    <div
                        key={`${selectedKey}-${category.key}`}
                        className={cn(revealClassName)}
                        style={getRevealStyle(ROW_BASE_DELAY_MS + index * ROW_STAGGER_DELAY_MS)}
                    >
                        <SkillRows category={category} isAllSelected={isAllSelected} />
                    </div>
                ))}
            </div>
        </div>
    );
}

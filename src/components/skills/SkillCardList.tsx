'use client'

import SkillRows from "@/src/components/skills/SkillRows";
import { SkillCategory } from "@/src/types/skills";
import CategoryFilterToggle from "@/src/components/common/CategoryFilterToggle";
import { useCategoryFilter } from "@/src/hooks/useCategoryFilter";

interface SkillCardListProps {
    categories: readonly SkillCategory[];
}

export default function SkillCardList({ categories }: SkillCardListProps) {
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories, isAllSelected } =
        useCategoryFilter({ categories });


    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-start">
                <CategoryFilterToggle
                    selectedKey={selectedKey}
                    options={categoryOptions}
                    onSelect={setSelectedKey}
                />
            </div>

            <div className="flex flex-col gap-4">
                {filteredCategories.map((category) => (
                    <SkillRows
                        key={category.key}
                        category={category}
                        detail={!isAllSelected}
                    />
                ))}
            </div>
        </div>
    );
}

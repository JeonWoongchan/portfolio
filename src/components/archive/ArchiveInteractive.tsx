"use client";

import { useMemo, useState } from "react";
import SectionActionButton from "@/src/components/common/SectionActionButton";
import { GridContainer } from "@/src/components/Container";
import ArchiveCountItem from "@/src/components/archive/ArchiveCountItem";
import ArchiveGridCard from "@/src/components/archive/ArchiveGridCard";
import { useCategoryFilter } from "@/src/hooks/useCategoryFilter";
import { ArchiveCategory } from "@/src/types/archive";

interface ArchiveInteractiveProps {
    categories: readonly ArchiveCategory[];
}

const ITEMS_PER_PAGE = 6;

export default function ArchiveInteractive({ categories }: ArchiveInteractiveProps) {
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories } =
        useCategoryFilter({ categories });
    const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

    const handleSelectCategory = (key: string) => {
        setSelectedKey(key);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const filteredItems = useMemo(
        () =>
            filteredCategories.flatMap((category) =>
                category.items.map((item) => ({
                    ...item,
                    category: category.key,
                }))
            ),
        [filteredCategories]
    );

    const visibleItems = useMemo(
        () => filteredItems.slice(0, visibleCount),
        [filteredItems, visibleCount]
    );

    const hasMoreItems = visibleItems.length < filteredItems.length;
    const canToggleItems = filteredItems.length > ITEMS_PER_PAGE;
    const isExpanded = !hasMoreItems;

    const handleToggleVisible = () => {
        setVisibleCount(isExpanded ? ITEMS_PER_PAGE : filteredItems.length);
    };

    return (
        <>
            <ArchiveCountItem
                selectedKey={selectedKey}
                options={categoryOptions}
                onSelect={handleSelectCategory}
            />

            <GridContainer className="mx-auto mt-8 w-full max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                {visibleItems.map((item) => (
                    <li key={`${item.category}-${item.id}`} className="w-full">
                        <ArchiveGridCard item={item} />
                    </li>
                ))}
            </GridContainer>
            {canToggleItems && (
                <div className="mt-4 flex justify-center">
                    <SectionActionButton
                        type="button"
                        className="w-[15%]"
                        onClick={handleToggleVisible}
                    >
                        {isExpanded ? "접기" : "더보기"}
                    </SectionActionButton>
                </div>
            )}
        </>
    );
}

"use client";

import { useMemo, useState } from "react";
import { GridContainer } from "@/src/components/Container";
import ArchiveCountItem from "@/src/components/Archive/ArchiveCountItem";
import ArchiveGridCard from "@/src/components/Archive/ArchiveGridCard";
import type { ArchiveCardItem, ArchiveFilter } from "@/src/types/archive";

interface ArchiveInteractiveProps {
    projectItems: readonly ArchiveCardItem[];
    postItems: readonly ArchiveCardItem[];
}

export default function ArchiveInteractive({
    projectItems,
    postItems,
}: ArchiveInteractiveProps) {
    const [selectedFilter, setSelectedFilter] = useState<ArchiveFilter>("all");
    const archiveItems = useMemo(() => [...projectItems, ...postItems], [postItems, projectItems]);
    const filteredItems = useMemo(() =>
            selectedFilter === "all"
                ? archiveItems
                : archiveItems.filter((item) => item.type === selectedFilter),
        [archiveItems, selectedFilter]
    );

    return (
        <>
            <ArchiveCountItem
                projectCount={projectItems.length}
                blogPostCount={postItems.length}
                totalCount={archiveItems.length}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />

            <GridContainer className="mx-auto mt-8 w-full max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                {filteredItems.map((item) => (
                    <li key={`${item.type}-${item.id}`} className="w-full">
                        <ArchiveGridCard item={item} />
                    </li>
                ))}
            </GridContainer>
        </>
    );
}

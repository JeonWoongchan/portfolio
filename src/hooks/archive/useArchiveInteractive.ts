"use client";

import { useCallback, useMemo, useState } from "react";
import { useCategoryFilter } from "@/src/hooks/shared/useCategoryFilter";
import type { ArchiveCardItem, ArchiveCategory } from "@/src/types/archive";
import { sortByLatestPeriod } from "@/src/utils/yearMonthPeriod";

interface UseArchiveInteractiveParams {
    categories: readonly ArchiveCategory[];
    itemsPerPage: number;
}

interface UseArchiveInteractiveResult {
    selectedKey: string;
    categoryOptions: ReturnType<typeof useCategoryFilter<ArchiveCategory>>["categoryOptions"];
    visibleItems: readonly ArchiveCardItem[];
    canToggleItems: boolean;
    isExpanded: boolean;
    handleSelectCategory: (key: string) => void;
    handleToggleVisible: () => void;
}

function compareArchiveItemsTieBreaker(left: ArchiveCardItem, right: ArchiveCardItem): number {
    const titleOrder = left.title.localeCompare(right.title, "ko");

    if (titleOrder !== 0) {
        return titleOrder;
    }

    return right.id - left.id;
}

// 아카이브 섹션의 카테고리 필터/더보기 상태를 통합 관리하는 훅
export function useArchiveInteractive({
    categories,
    itemsPerPage,
}: UseArchiveInteractiveParams): UseArchiveInteractiveResult {
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories } =
        useCategoryFilter({ categories });
    const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

    // 카테고리 필터 결과를 평탄화한 뒤 최신순으로 정렬
    const filteredItems = useMemo<ArchiveCardItem[]>(
        () =>
            sortByLatestPeriod(
                filteredCategories.flatMap((category) =>
                    category.items.map((item) => ({
                        ...item,
                        category: category.key,
                    }))
                ),
                compareArchiveItemsTieBreaker
            ),
        [filteredCategories]
    );

    const filteredItemCount = filteredItems.length;
    const visibleItems = useMemo(
        () => filteredItems.slice(0, visibleCount),
        [filteredItems, visibleCount]
    );

    const hasMoreItems = visibleItems.length < filteredItemCount;
    const canToggleItems = filteredItemCount > itemsPerPage;
    const isExpanded = !hasMoreItems;

    const handleSelectCategory = useCallback(
        (key: string) => {
            setSelectedKey(key);
            setVisibleCount(itemsPerPage);
        },
        [itemsPerPage, setSelectedKey]
    );

    const handleToggleVisible = useCallback(() => {
        setVisibleCount(isExpanded ? itemsPerPage : filteredItemCount);
    }, [filteredItemCount, isExpanded, itemsPerPage]);

    return {
        selectedKey,
        categoryOptions,
        visibleItems,
        canToggleItems,
        isExpanded,
        handleSelectCategory,
        handleToggleVisible,
    };
}

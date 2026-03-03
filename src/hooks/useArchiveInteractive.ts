"use client";

import { useCallback, useMemo, useState } from "react";
import { useCategoryFilter } from "@/src/hooks/useCategoryFilter";
import type { ArchiveCardItem, ArchiveCategory } from "@/src/types/archive";

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

// 아카이브 섹션의 카테고리 필터와 더보기/접기 인터랙션 상태를 통합 관리하는 훅
export function useArchiveInteractive({
    categories,
    itemsPerPage,
}: UseArchiveInteractiveParams): UseArchiveInteractiveResult {
    // 1) 카테고리 선택 상태/옵션/필터링된 카테고리 목록을 공용 훅으로 관리
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories } =
        useCategoryFilter({ categories });

    // 2) 현재 화면에 노출할 카드 수(초기값: 페이지 기본 개수)
    const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

    // 3) 필터링된 카테고리 그룹을 카드 렌더링용 평탄 배열로 변환
    const filteredItems = useMemo<ArchiveCardItem[]>(
        () =>
            filteredCategories.flatMap((category) =>
                category.items.map((item) => ({
                    ...item,
                    category: category.key,
                }))
            ),
        [filteredCategories]
    );

    const filteredItemCount = filteredItems.length;

    // 4) 현재 노출 개수 기준으로 실제 렌더링할 카드 목록 계산
    const visibleItems = useMemo(
        () => filteredItems.slice(0, visibleCount),
        [filteredItems, visibleCount]
    );

    // 5) 더보기/접기 UI 제어용 파생 상태
    const hasMoreItems = visibleItems.length < filteredItemCount;
    const canToggleItems = filteredItemCount > itemsPerPage;
    const isExpanded = !hasMoreItems;

    // 6) 카테고리 변경 시 첫 페이지부터 다시 노출
    const handleSelectCategory = useCallback(
        (key: string) => {
            setSelectedKey(key);
            setVisibleCount(itemsPerPage);
        },
        [itemsPerPage, setSelectedKey]
    );

    // 7) 더보기/접기 토글: 접힌 상태면 전체 노출, 펼친 상태면 기본 개수로 복귀
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

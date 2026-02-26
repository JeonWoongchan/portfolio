'use client'

import { useMemo, useState } from "react";
import type { CategoryGroup } from "@/src/types/category";

export type CategoryOption = {
    key: string;
    title: string;
    count: number;
};

interface UseCategoryFilterParams<TCategory extends CategoryGroup<unknown>> {
    categories: readonly TCategory[];
    allKey?: string;
    allLabel?: string;
}

export function useCategoryFilter<TCategory extends CategoryGroup<unknown>>({
    categories,
    allKey = "all",
    allLabel = "All",
}: UseCategoryFilterParams<TCategory>) {
    // 현재 선택된 카테고리 키 상태. 기본값은 전체(all)
    const [selectedKey, setSelectedKey] = useState<string>(allKey);

    // 모든 카테고리 아이템 수를 합산해 "전체" 개수 카운트
    const totalItemCount = useMemo(
        () => categories.reduce((sum, category) => sum + category.items.length, 0),
        [categories]
    );

    // 토글/탭 UI에서 사용할 옵션 목록 생성 (전체 + 개별 카테고리)
    const categoryOptions = useMemo<CategoryOption[]>(() => {
        const options = categories.map(({ key, title, items }) => ({
            key,
            title,
            count: items.length,
        }));

        return [{ key: allKey, title: allLabel, count: totalItemCount }, ...options];
    }, [allKey, allLabel, categories, totalItemCount]);

    // 선택된 키에 따라 카테고리 그룹을 필터링
    // - all 선택 시: 전체 카테고리 유지
    // - 특정 키 선택 시: 해당 카테고리만 반환
    const filteredCategories = useMemo(
      () =>
            selectedKey === allKey
                ? categories
                : categories.filter((category) => category.key === selectedKey),
        [allKey, categories, selectedKey]
    );

    // 화면에서 바로 쓰기 쉽도록, 필터링된 카테고리의 items를 평탄화해 단일 리스트로 제공
    const filteredItems = useMemo(
        () => filteredCategories.flatMap((category) => category.items),
        [filteredCategories]
    );

    // "전체" 선택 여부를 별도로 노출해 UI 분기(상세/요약 표시 등)에 활용
    const isAllSelected = selectedKey === allKey;

    return {
        selectedKey,
        setSelectedKey,
        categoryOptions,
        filteredCategories,
        filteredItems,
        isAllSelected,
    };
}

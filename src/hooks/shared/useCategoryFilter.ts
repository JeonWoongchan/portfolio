'use client'

import { useMemo, useState } from 'react';
import type { CategoryGroup } from '@/src/types/category';

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

// 카테고리 선택 상태, 옵션 목록, 필터링된 결과를 함께 관리하는 훅
export function useCategoryFilter<TCategory extends CategoryGroup<unknown>>({
    categories,
    allKey = 'all',
    allLabel = 'All',
}: UseCategoryFilterParams<TCategory>) {
    // 현재 선택된 카테고리 키 상태
    const [selectedKey, setSelectedKey] = useState<string>(allKey);

    // 전체 카테고리의 아이템 수를 합산해 "전체" 카운트에 사용
    const totalItemCount = useMemo(
        () => categories.reduce((sum, category) => sum + category.items.length, 0),
        [categories]
    );

    // UI에서 사용할 카테고리 옵션 목록 (전체 + 개별 카테고리)
    const categoryOptions = useMemo<CategoryOption[]>(() => {
        const options = categories.map(({ key, title, items }) => ({
            key,
            title,
            count: items.length,
        }));

        return [{ key: allKey, title: allLabel, count: totalItemCount }, ...options];
    }, [allKey, allLabel, categories, totalItemCount]);

    // 선택 키에 따라 카테고리 그룹을 필터링
    const filteredCategories = useMemo(
        () =>
            selectedKey === allKey
                ? categories
                : categories.filter((category) => category.key === selectedKey),
        [allKey, categories, selectedKey]
    );

    // 렌더링 편의를 위해 필터링된 카테고리의 아이템을 평탄화
    const filteredItems = useMemo(
        () => filteredCategories.flatMap((category) => category.items),
        [filteredCategories]
    );

    // "전체" 선택 여부를 별도 값으로 제공
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

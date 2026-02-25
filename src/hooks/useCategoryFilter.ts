'use client'

import { useMemo, useState } from "react";

export type CategoryOption = {
    key: string;
    title: string;
    count: number;
};

type BaseCategory = {
    key: string;
    title: string;
    items: readonly unknown[];
};

interface UseCategoryFilterParams<TCategory extends BaseCategory> {
    categories: readonly TCategory[];
    allKey?: string;
    allLabel?: string;
}

export function useCategoryFilter<TCategory extends BaseCategory>({
    categories,
    allKey = "all",
    allLabel = "All",
}: UseCategoryFilterParams<TCategory>) {
    const [selectedKey, setSelectedKey] = useState<string>(allKey);

    const totalItemCount = useMemo(
        () => categories.reduce((sum, category) => sum + category.items.length, 0),
        [categories]
    );

    const categoryOptions = useMemo<CategoryOption[]>(() => {
        const options = categories.map(({ key, title, items }) => ({
            key,
            title,
            count: items.length,
        }));

        return [{ key: allKey, title: allLabel, count: totalItemCount }, ...options];
    }, [allKey, allLabel, categories, totalItemCount]);

    const filteredCategories = useMemo(
        () =>
            selectedKey === allKey
                ? categories
                : categories.filter((category) => category.key === selectedKey),
        [allKey, categories, selectedKey]
    );

    const isAllSelected = selectedKey === allKey;

    return {
        selectedKey,
        setSelectedKey,
        categoryOptions,
        filteredCategories,
        isAllSelected,
    };
}

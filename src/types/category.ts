import {CategoryOption} from "@/src/hooks/shared/useCategoryFilter";

export interface CategoryGroup<TItem, TKey extends string = string> {
        key: TKey;
        title: string;
        items: readonly TItem[];
}

export interface CategoryFilterProps {
    selectedKey: string;
    options: readonly CategoryOption[];
    onSelect: (key: string) => void;
}


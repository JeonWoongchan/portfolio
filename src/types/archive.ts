import type { CategoryGroup } from "@/src/types/category";
import type { YearMonth } from "@/src/types/yearMonth";

export type ArchiveCategoryKey = "project" | "blog";

export interface ArchiveItem {
    id: number;
    periodStart: YearMonth;
    periodEnd: YearMonth;
    title: string;
    link: string;
    description: string;
    tags: readonly string[];
}

export type ArchiveCategory = CategoryGroup<ArchiveItem, ArchiveCategoryKey>;

export interface ArchiveCardItem extends ArchiveItem {
    category: ArchiveCategoryKey;
}

export type ArchiveFilter = "all" | ArchiveCategoryKey;

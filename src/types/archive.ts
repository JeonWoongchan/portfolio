import type { CategoryGroup } from "@/src/types/category";

export type ArchiveCategoryKey = "project" | "blog";

export interface ArchiveItem {
    id: number;
    date: string;
    title: string;
    description: string;
    tags: readonly string[];
}

export type ArchiveCategory = CategoryGroup<ArchiveItem, ArchiveCategoryKey>;

export interface ArchiveCardItem extends ArchiveItem {
    category: ArchiveCategoryKey;
}

export type ArchiveFilter = "all" | ArchiveCategoryKey;

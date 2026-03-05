import type { CategoryGroup } from "@/src/types/category";

export type SkillItem  = {
    name: string
    content: string
    tags: string[]
};

export type SkillCategory = CategoryGroup<SkillItem>;

export type SkillItem  = {
    name: string
    content: string
    tags: string[]
};

export type SkillCategory = {
    key: string
    title: string
    items: SkillItem[]
};

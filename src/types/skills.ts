export type SkillItem  = {
    name: string
    img: string
    content: string
    tags: string[]
};

export type SkillCategory = {
    key: string
    title: string
    items: SkillItem[]
};
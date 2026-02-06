export type SkillItem  = {
    name: string;
    content: string;
    img: string;
};

export type SkillCategory = {
    key: string;
    title: string;
    layoutClass: string;
    sectionClass: string;
    items: SkillItem[];
};
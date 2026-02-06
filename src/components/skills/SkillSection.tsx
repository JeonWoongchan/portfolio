
// 스킬 섹션 컴포넌트 분리
import {cn} from "@/lib/utils";
import SkillItemCard from "@/src/components/skills/SkillItemCard";
import {SkillCategory} from "@/src/types/skills";

export default function SkillSection({
    section,
    animationClass
}: {
    section: SkillCategory;
    animationClass: string;
}) {
    return (
        <section
            className={cn(
                "p-4 pb-8",
                section.layoutClass,
                section.sectionClass,
                animationClass
            )}
        >
            <h3 className="mb-4 text-xl font-semibold text-(--color-accent)">
                {section.title}
            </h3>
            <ul className="flex flex-col gap-5 p-2">
                {section.items.map((item) => (
                    <SkillItemCard
                        key={`${section.key}-${item.name}`}
                        item={item}
                        sectionKey={section.key}
                    />
                ))}
            </ul>
        </section>
    );
}
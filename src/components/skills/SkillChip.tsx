import {SkillItem} from "@/src/types/skills";
import TooltipIcon from "@/src/components/HeroIcon";

export default function SkillChip({ item }: { item: SkillItem }) {
    return (
        <div className="group/item relative flex shrink-0 cursor-default items-center gap-2.5 rounded-md
                        bg-(--color-primary-variant) px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <TooltipIcon
                src={item.img || "/placeholder.svg"}
                alt={`${item.name} icon`}
                width={30}
                height={30}
                className="h-8 w-8 object-contain"
                tooltip={item.content}
            />
        </div>
    )
}
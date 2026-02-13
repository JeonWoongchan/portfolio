import {SkillItem} from "@/src/types/skills";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {SmallText} from "@/src/components/Typography";

export default function SkillCardDetail({ item }: { item: SkillItem }) {
    return (
        <Card className="w-full group/item relative gap-4 justify-between shrink-0 cursor-default rounded-md
                        bg-(--color-primary-variant) p-4">
            <div className={"flex items-center justify-start gap-4"}>
                <Image
                    src={item.img || "/placeholder.svg"}
                    alt={`${item.name} icon`}
                    width={40}
                    height={40}
                />
                <SmallText className={"text-white font-bold leading-none"}>{item.name}</SmallText>
            </div>
            <ul className={"flex gap-2"}>
                {item.tags.map((tag)=> (
                    <li key={`${item.name}-${tag}`}
                        className={"text-white text-xs px-2 py-1 bg-(--color-border-light) rounded-full"}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </Card>

    )
}
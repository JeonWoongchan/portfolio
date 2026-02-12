import {SkillItem} from "@/src/types/skills";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {BodyText, SmallText} from "@/src/components/Typography";

export default function SkillCardDetail({ item }: { item: SkillItem }) {
    return (
        <Card className="w-full group/item relative flex flex-row shrink-0 cursor-default gap-8 rounded-md
                        bg-(--color-primary-variant) px-8 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <Image
                src={item.img || "/placeholder.svg"}
                alt={`${item.name} icon`}
                width={30}
                height={30}
                className={cn("h-15 w-15 object-contain")}
            />
            <div className={"flex flex-col gap-4 justify-between"}>
                <BodyText className={"text-white font-bold leading-none"}>{item.name}</BodyText>
                <SmallText>{item.content}</SmallText>
                <ul className={"flex gap-4"}>
                    {item.tags.map((tag)=> (
                        <li key={`${item.name}-${tag}`}
                            className={"text-white text-sm px-2 py-1 bg-(--color-border-light) rounded-full"}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>

    )
}
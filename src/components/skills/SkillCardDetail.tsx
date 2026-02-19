import {SkillItem} from "@/src/types/skills";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {SmallText} from "@/src/components/Typography";

export default function SkillCardDetail({ item }: { item: SkillItem }) {
    return (
        <Card
            className="flex w-full flex-row items-
                      start gap-4 rounded-md bg-(--color-primary-
                      variant) p-4"
        >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden">
                <Image
                    src={item.img || "/placeholder.svg"}
                    alt={`${item.name} icon`}
                    fill
                    className="block object-contain object-top"
                />
            </div>

            <div className="flex flex-col gap-4 justify-between cursor-default">
                <SmallText className="m-0 font-bold
                      leading-none text-white">
                    {item.name}
                </SmallText>
                <ul className="flex flex-col md:flex-row gap-2">
                    {item.tags.map((tag) => (
                        <li
                            key={`${item.name}-${tag}`}
                            className="rounded-full bg-(--color-border-light) px-2 py-1 text-xs text-white text-center inline-flex items-center"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}
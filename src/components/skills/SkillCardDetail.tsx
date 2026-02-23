import {SkillItem} from "@/src/types/skills";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {SmallText} from "@/src/components/Typography";
import {stackMeta, StackName} from "@/src/types/stack";
import InlineTagList from "@/src/components/common/InlineTagList";

export default function SkillCardDetail({ item }: { item: SkillItem }) {
    return (
        <Card
            className="flex w-full flex-row items-
                      start gap-4 rounded-md bg-(--color-navy-light) p-4"
        >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden">
                <Image
                    src={stackMeta[item.name as StackName].img || "/placeholder.svg"}
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
                <InlineTagList items={item.tags} keyPrefix={item.name} />
            </div>
        </Card>
    )
}

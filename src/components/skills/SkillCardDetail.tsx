import {SkillItem} from "@/src/types/skills";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {SmallText} from "@/src/components/Typography";
import {stackMeta, StackName} from "@/src/types/stack";
import InlineTagList from "@/src/components/common/InlineTagList";

export default function SkillCardDetail({ item }: { item: SkillItem }) {
    return (
        <Card
                variant="surface"
                className="w-full items-start gap-4 rounded-md p-4"
        >
            <div className="flex gap-2 items-center cursor-default">
                <div className="flex h-10 w-10 items-center justify-center">
                    <Image
                            src={stackMeta[item.name as
                                    StackName].img || "/placeholder.svg"}
                            alt={`${item.name} icon`}
                            width={30}
                            height={30}
                            className="block object-contain"
                    />
                </div>
                <SmallText className="m-0 font-bold
                            leading-none text-white">
                        {item.name}
                </SmallText>
            </div>
            <InlineTagList items={item.tags} keyPrefix={item.name} />
        </Card>
    )
}

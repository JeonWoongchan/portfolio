import {SkillItem} from "@/src/types/skills";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Card} from "@/components/ui/card";
import {stackMeta, StackName} from "@/src/types/stack";

// TODO: Footer에 Icons provided by Devicon. 문구 삽입
export default function SkillCard({ item }: { item: SkillItem }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Card className="group/item relative flex flex-col shrink-0 cursor-default items-center gap-2.5 rounded-md
                        px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-(--color-navy-light)">
                    <Image
                        src={stackMeta[item.name as StackName].img || "/placeholder.svg"}
                        alt={`skill-icon ${item.name}`}
                        width={30}
                        height={30}
                        className={cn("h-8 w-8 object-contain")}
                    />
                </Card>
            </TooltipTrigger>
            <TooltipContent
                className="bg-white text-(--color-navy) border rounded-md"
                side={"bottom"}
                sideOffset={5}
            >
                <p>{item.name}</p>
            </TooltipContent>
        </Tooltip>

    )
}
import {SkillItem} from "@/src/types/skills";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Card} from "@/components/ui/card";

export default function SkillCard({ item }: { item: SkillItem }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Card className="group/item relative flex flex-col shrink-0 cursor-default items-center gap-2.5 rounded-md
                        bg-(--color-primary-variant) px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <Image
                        src={item.img || "/placeholder.svg"}
                        alt={`${item.name} icon`}
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